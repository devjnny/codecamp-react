import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import BoardCommentListUI from './BoardCommentList.presenter'
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'
import type { IQuery, IQueryFetchBoardCommentsArgs } from '@/src/commons/types/generated/types'

export default function BoardCommentList() {
	const router = useRouter()
	if (!router || typeof router.query.boardId !== 'string') return <></>

	const { data } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(
		FETCH_BOARD_COMMENTS,
		{
			variables: {
				boardId: router.query.boardId,
			},
		}
	)

	return data ? <BoardCommentListUI comments={data} /> : <div>Loading...</div>
}