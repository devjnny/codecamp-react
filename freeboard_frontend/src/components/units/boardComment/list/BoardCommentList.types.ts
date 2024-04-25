import type { IQuery } from '@/src/commons/types/generated/types'

export interface IBoardCommentListProps {
	comments: Pick<IQuery, 'fetchBoardComments'>
	onLoadMore: () => void
}
