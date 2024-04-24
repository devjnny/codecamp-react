import type { IBoardComment } from '@/src/commons/types/generated/types'

export interface IBoardCommentItemProps {
	comment: IBoardComment
	isEdit: boolean
	onClickEdit: () => void
	onClickDelete: () => void
}
