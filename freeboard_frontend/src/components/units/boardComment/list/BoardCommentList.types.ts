import type { IQuery } from '@/src/commons/types/generated/types'
import type { ChangeEvent } from 'react'

export interface IBoardCommentListProps {
	comments: Pick<IQuery, 'fetchBoardComments'>
	isOpenDeleteDialog: boolean
	handleDeleteDialog: (event?: any) => void
	handleDeleteDialogCancel: () => void
	onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void
	onClickDelete: () => Promise<void>
	onLoadMore: () => void
}
