import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from '@/src/commons/types/generated/types'
import { useQuery, gql } from '@apollo/client'
import { useState, type ChangeEvent } from 'react'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'

const FETCH_BOARD = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`

export default function MapBoardPage() {
  const [keyword, setKeyowrd] = useState<string>('') // 키워드 저장
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARD)

  const onClickPage = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // 검색에서 refetch할 때, search 검색어가 refetch에 이미 저장되어 있는 상태이므로 추가로 search 포함하지 않아도 됨
    void refetch({ page: Number(event.currentTarget.id) }) // async/await는 refetch로 데이터를 불러와서 그 데이터를 변수에 담는 등의 후속 작업이 필요할 때 사용
  }

  const getDebounce = _.debounce((value: string) => {
    // 입력 후 5초동안 추가 입력이 없으면 refech 1회 실행
    void refetch({ search: value, page: 1 })
    setKeyowrd(value)
  }, 500)

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // void refetch({ search: event.currentTarget.value, page: 1 }) // input에 입력할 떄마다 api 요청 들어감 - 성능 저하, 비용 증가
    getDebounce(event.currentTarget.value)
  }

  // const onClickSearch = () => {
  //   void refetch({ search, page: 1 })
  // }

  return (
    <div>
      <div>
        검색어 입력: <input type="text" onChange={onChangeSearch} />
        {/* <button onClick={onClickSearch}>검색하기</button> */}
      </div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <button style={{ margin: '6px' }}>
            {el.title
              .replaceAll(keyword, `@#$${keyword}@#$`) // 시크릿코드를 사용해 검색어 양 옆에 넣고 시크릿코드로 split
              .split('@#$')
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? 'red' : 'black' }}
                >
                  {el}
                </span>
              ))}
          </button>
          <span style={{ margin: '6px' }}>{el.writer}</span>
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
