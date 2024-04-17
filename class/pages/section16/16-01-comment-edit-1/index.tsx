import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from '@/src/commons/types/generated/types'
import { useQuery, gql } from '@apollo/client'
import { useState } from 'react'

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
  // 댓글 하나 수정하기
  const [myIndex, setMyIndex] = useState<number>()

  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  )

  const onClickEdit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setMyIndex(Number(event.currentTarget.id))
  }

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        index !== myIndex ? (
          <div key={el._id}>
            <button style={{ margin: '10px' }}>{el.title}</button>
            <span style={{ margin: '10px' }}>{el.writer}</span>
            <button id={String(index)} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          <input key={el._id} type="text" />
        ),
      )}
    </div>
  )
}
