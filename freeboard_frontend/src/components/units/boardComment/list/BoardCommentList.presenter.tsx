import * as S from './BoardCommentList.styles'
import type { IBoardComment } from '@/src/commons/types/generated/types'
import BoardCommentItem from '../comment/BoardCommentItem.container'
import Dialog from '../../../common/Dialog'
import InfiniteScroll from 'react-infinite-scroller'
import type { IBoardCommentListProps } from './BoardCommentList.types'

export default function BoardCommentListUI({
	comments,
	isOpenDeleteDialog,
	handleDeleteDialog,
	handleDeleteDialogCancel,
	onChangeDeletePassword,
	onClickDelete,
	onLoadMore,
}: IBoardCommentListProps) {
	return (
		<S.CommentListWrapper id="comment-list">
			{isOpenDeleteDialog && (
				<Dialog
					title="비밀번호 입력"
					showDialog={isOpenDeleteDialog}
					onClickOk={onClickDelete}
					onClickCancel={handleDeleteDialogCancel}>
					<input type="password" style={{ width: '100%' }} onChange={onChangeDeletePassword} />
				</Dialog>
			)}
			<InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
				{comments?.fetchBoardComments?.map((comment: IBoardComment) => (
					<BoardCommentItem
						key={comment._id}
						comment={comment}
						onClickDelete={handleDeleteDialog}
					/>
				))}
			</InfiniteScroll>
		</S.CommentListWrapper>
	)
}
