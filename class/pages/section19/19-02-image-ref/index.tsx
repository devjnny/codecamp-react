import type {
  IMutation,
  IMutationUploadFileArgs,
} from '@/src/commons/types/generated/types'
import { gql, useMutation } from '@apollo/client'
import { useRef, useState, type ChangeEvent } from 'react'

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`

export default function ImageUploadPage(): JSX.Element {
  const [src, setSrc] = useState<string | undefined>('')
  const fileRef = useRef<HTMLInputElement>(null)

  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE)

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.length && event.target.files[0] // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 이미지 여러 개 드래그 가능

    const result = await uploadFile({ variables: { file } })
    setSrc(result.data?.uploadFile.url)
    // https://storage.googleapis.com - cloud storage 주소
  }

  const onClickImage = (): void => {
    fileRef.current?.click()
  }

  return (
    <>
      <div
        style={{ width: '100px', height: '50px', backgroundColor: 'gray' }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      {/* 파일 선택 기본 버튼 숨기기 */}
      <input
        ref={fileRef}
        style={{ display: 'none' }}
        type="file"
        onChange={onChangeFile}
        multiple={true}
      />
      <div>
        <img
          src={`https://storage.googleapis.com/${src}`}
          alt=""
          width={300}
          height={200}
        />
      </div>
    </>
  )
}
