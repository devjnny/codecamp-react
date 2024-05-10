import { checkValidation } from '@/src/commons/libraries/validationFile'
import type {
  IMutation,
  IMutationUploadFileArgs,
} from '@/src/commons/types/generated/types'
import { gql, useMutation } from '@apollo/client'
import { useRef, useState, type ChangeEvent } from 'react'

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`

export default function ImageUploadPage(): JSX.Element {
  const [imgUrl, setImgUrl] = useState<string | undefined>('')
  const fileRef = useRef<HTMLInputElement>(null)

  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE)

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.length && event.target.files[0] // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 이미지 여러 개 드래그 가능

    // 이미지 validation check
    const isValid = checkValidation(file as File)
    if (!isValid) return

    const result = await uploadFile({ variables: { file } })
    setImgUrl(result.data?.uploadFile.url)
    // https://storage.googleapis.com - cloud storage 주소
  }

  const onClickImage = (): void => {
    fileRef.current?.click()
  }

  // ///////////////////////////////////////////////

  const [writer, setWriter] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  const [sampleGraphql] = useMutation(CREATE_BOARD)

  const onClickSubmit = async (): Promise<void> => {
    const result = await sampleGraphql({
      variables: {
        createBoardInput: {
          writer,
          password: '1234',
          title,
          contents,
          images: [imgUrl],
        },
      },
    })
    console.log(result)
  }

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.currentTarget.value)
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.currentTarget.value)
  }

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} /> <br />
      제목: <input type="text" onChange={onChangeTitle} /> <br />
      내용: <input type="text" onChange={onChangeContents} /> <br />
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
        accept="image/jpeg,imgae/png"
      />
      <div>
        <img
          src={`https://storage.googleapis.com/${imgUrl}`}
          alt=""
          width={300}
          height={200}
        />
      </div>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
    </>
  )
}
