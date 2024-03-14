import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title:$title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {
    const router = useRouter()

    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {

        try { //try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄 모두 무시하고 catch에 있는 내용 실행

            const result = await createBoard({
                variables: {
                    writer: "훈이",
                    title: "안녕하세요!",
                    contents: "반갑습니다"
                }
            })
            console.log(result)
            router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)

        } catch(error) {
            alert(error)
        }
    }  
    
    return (
        <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
    )

}