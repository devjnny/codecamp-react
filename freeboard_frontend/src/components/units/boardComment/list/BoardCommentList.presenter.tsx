import * as S from './BoardCommentList.styles'
import type { IQuery, IBoardComment } from '@/src/commons/types/generated/types'
import BoardCommentItem from '../comment/BoardCommentItem.container'
import Dialog from '../../../common/Dialog'
import type { ChangeEvent } from 'react'

export default function BoardCommentListUI({
	comments,
	isOpenDeleteDialog,
	handleDeleteDialog,
	handleDeleteDialogCancel,
	onChangeDeletePassword,
	onClickDelete,
}: {
	comments: Pick<IQuery, 'fetchBoardComments'>
	isOpenDeleteDialog: boolean
	handleDeleteDialog: (event?: any) => void
	handleDeleteDialogCancel: () => void
	onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void
	onClickDelete: () => Promise<void>
}) {
	return (
		<S.CommentListWrapper>
			{isOpenDeleteDialog && (
				<Dialog
					title="비밀번호 입력"
					showDialog={isOpenDeleteDialog}
					onClickOk={onClickDelete}
					onClickCancel={handleDeleteDialogCancel}>
					<input type="password" style={{ width: '100%' }} onChange={onChangeDeletePassword} />
				</Dialog>
			)}
			{comments?.fetchBoardComments?.map((comment: IBoardComment) => (
				<BoardCommentItem key={comment._id} comment={comment} onClickDelete={handleDeleteDialog} />
			))}
		</S.CommentListWrapper>
	)
}
