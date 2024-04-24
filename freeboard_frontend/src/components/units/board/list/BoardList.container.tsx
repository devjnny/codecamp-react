import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries'
import type {
	IQuery,
	IQueryFetchBoardsArgs,
	IQueryFetchBoardsCountArgs,
} from '@/src/commons/types/generated/types'

export default function BoardList() {
	const router = useRouter()
	const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
		FETCH_BOARDS
	)
	const { data: boardsCount } = useQuery<
		Pick<IQuery, 'fetchBoardsCount'>,
		IQueryFetchBoardsCountArgs
	>(FETCH_BOARDS_COUNT)

	const onClickMove = (boardId: string) => {
		void router.push(`/boards/${boardId}`)
	}

	const onClickWrite = () => {
		void router.push('/boards/new')
	}

	return (
		<BoardListUI
			data={data}
			refetch={refetch}
			boardsCount={Number(boardsCount?.fetchBoardsCount)}
			onClickMove={onClickMove}
			onClickWrite={onClickWrite}
		/>
	)
}
