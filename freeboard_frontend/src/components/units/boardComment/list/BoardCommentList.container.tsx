import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import BoardCommentListUI from './BoardCommentList.presenter'
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'
import type { IQuery, IQueryFetchBoardCommentsArgs } from '@/src/commons/types/generated/types'
export default function BoardCommentList() {
	const router = useRouter()

	const { data, fetchMore } = useQuery<
		Pick<IQuery, 'fetchBoardComments'>,
		IQueryFetchBoardCommentsArgs
	>(
		FETCH_BOARD_COMMENTS,
		typeof router.query.boardId === 'string'
			? {
					variables: {
						boardId: router.query.boardId,
					},
				}
			: { skip: true }
	)

	const onLoadMore = (): void => {
		if (data === undefined) return

		void fetchMore({
			variables: {
				page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult?.fetchBoardComments) {
					return {
						fetchBoardComments: [...prev.fetchBoardComments],
					}
				}

				return {
					fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
				}
			},
		})
	}

	return data ? (
		<BoardCommentListUI comments={data} onLoadMore={onLoadMore} />
	) : (
		<div>Loading...</div>
	)
}
