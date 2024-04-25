import * as S from './BoardCommentList.styles'
import type { IBoardComment } from '@/src/commons/types/generated/types'
import BoardCommentItem from '../comment/BoardCommentItem.container'
import InfiniteScroll from 'react-infinite-scroller'
import type { IBoardCommentListProps } from './BoardCommentList.types'

export default function BoardCommentListUI({ comments, onLoadMore }: IBoardCommentListProps) {
	return (
		<S.CommentListWrapper id="comment-list">
			<InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
				{comments?.fetchBoardComments?.map((comment: IBoardComment) => (
					<BoardCommentItem key={comment._id} comment={comment} />
				))}
			</InfiniteScroll>
		</S.CommentListWrapper>
	)
}
