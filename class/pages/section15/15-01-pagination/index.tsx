import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from '@/src/commons/types/generated/types'
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`

export default function MapBoardPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARD)

  const onClickPage = (event: React.MouseEvent<HTMLButtonElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) }) // async/await는 refetch로 데이터를 불러와서 그 데이터를 변수에 담는 등의 후속 작업이 필요할 때 사용
  }

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <button style={{ margin: '10px' }}>{el.title}</button>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  )
}
