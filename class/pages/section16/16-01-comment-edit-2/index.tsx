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
  // 댓글 여러 개 수정하기
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  )

  const onClickEdit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    /* 
    이렇게하면 변경 안됨 왜?
    useState는 이전과 값이 같으면 리렌더링이 발생하지 않음
    => val = myIndex는 주소를 넘겨준 것이므로 val 배열 내부 값을 바꾸면 myIndex 배열의 같은 값도 바뀜
    => 즉 이전과 비교했을 때 상태 변경이 발생하지 않아 리렌더링 안됨
    const val = myIndex
    val[Number(event.currentTarget.id)] = true
    setMyIndex(val)
    */

    const val = [...myIndex]
    val[Number(event.currentTarget.id)] = true
    setMyIndex(val)
  }

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        !myIndex[index] ? (
          <div key={el._id}>
            <button style={{ margin: '10px' }}>{el.title}</button>
            <span style={{ margin: '10px' }}>{el.writer}</span>
            <button id={String(index)} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          <div key={el._id}>
            <input type="text" />
          </div>
        ),
      )}
    </div>
  )
}
