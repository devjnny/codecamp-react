import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_BOARD } from '@/src/components/units/board/detail/BoardDetail.queries'
import BoardWrite from '@/src/components/units/board/write/BoardWrite.container'

export default function BoardsEditPage() {
	const router = useRouter()

	const { data } = useQuery(FETCH_BOARD, {
		variables: {
			boardId: router.query.boardId,
		},
	})

	// data=undefined일 때 BoardWrite.container에서 defaultValue 노출 안됨 => data 값 들어오면 수정 페이지로 이동할 수 있도록 수정
	return data ? <BoardWrite isEdit={true} data={data} /> : 'loadng'
}
