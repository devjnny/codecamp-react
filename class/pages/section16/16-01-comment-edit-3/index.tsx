import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from '@/src/commons/types/generated/types'
import CommentItem from '@/src/components/units/16-comment-item'
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARDS = gql`
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
  // 컴포넌트로 분리
  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  )

  return (
    <div>
      {data?.fetchBoards.map((el) => <CommentItem key={el._id} el={el} />)}
    </div>
  )
}
