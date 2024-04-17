import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from '@/src/commons/types/generated/types'
import { useQuery, gql } from '@apollo/client'
import { useState } from 'react'

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

const FETCH_BOARD_COUNT = gql`
  query {
    fetchBoardsCount
  }
`

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState<number>(1)
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARD)
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, 'fetchBoardsCount'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARD_COUNT)

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10)

  const onClickPage = (event: React.MouseEvent<HTMLButtonElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) }) // async/await는 refetch로 데이터를 불러와서 그 데이터를 변수에 담는 등의 후속 작업이 필요할 때 사용
  }

  const onClickPrev = (): void => {
    if (startPage === 1) return
    setStartPage((prev) => prev - 10)
    void refetch({ page: startPage - 10 })
  }
  const onClickNext = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10)
      void refetch({ page: startPage + 10 })
    }
  }
  const onClickFirst = (): void => {
    setStartPage(1)
  }
  const onClickLast = (): void => {
    const start = Math.floor(lastPage / 10) + '1'
    setStartPage(Number(start))
    void refetch({ page: Number(start) })
  }

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <button style={{ margin: '10px' }}>{el.title}</button>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}

      <span onClick={onClickFirst}>첫페이지</span>
      <span onClick={onClickPrev}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              style={{ margin: '5px' }}
            >
              {index + startPage}
            </span>
          ),
      )}
      <span onClick={onClickNext}>다음페이지</span>
      <span onClick={onClickLast}>라스트페이지</span>
    </div>
  )
}
