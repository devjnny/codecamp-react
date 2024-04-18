import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: '',
    title: '',
    contents: '',
  })

  const [sampleGraphql] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    const result = await sampleGraphql({
      variables: {
        // writer: inputs.writer,
        // title: inputs.title,
        // contents: inputs.contents,
        ...inputs,
      },
    })
    console.log(result)
  }

  //   const onChangeInputs = (event) => {
  //     setInputs({
  //       //   writer: inputs.writer,
  //       //   title: inputs.title,
  //       //   contents: inputs.contents,
  //       //   writer: event.target.value
  //       // 객체의 특성: key가 중복되면 가장 마지막에 있는 걸로 덮어씌움,
  //       ...inputs,
  //       [event.target.id]: event.target.value,
  //       // event.target.id로만 적으면 key가 event.target.id가 되어버리니까 그 안에 값을 키로 쓰려면 []로 묶기
  //     })
  //   }
  const onChangeInputs = (event) => {
    setInputs((prev) => ({
      //   writer: inputs.writer,
      //   title: inputs.title,
      //   contents: inputs.contents,
      //   writer: event.target.value
      // 객체의 특성: key가 중복되면 가장 마지막에 있는 걸로 덮어씌움,
      ...prev,
      [event.target.id]: event.target.value,
      // event.target.id로만 적으면 key가 event.target.id가 되어버리니까 그 안에 값을 키로 쓰려면 []로 묶기
    }))
  }

  return (
    <div>
      작성자: <input type="text" id="writer" onChange={onChangeInputs} /> <br />
      제목: <input type="text" id="title" onChange={onChangeInputs} /> <br />
      내용: <input type="text" id="contents" onChange={onChangeInputs} /> <br />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
    </div>
  )
}
