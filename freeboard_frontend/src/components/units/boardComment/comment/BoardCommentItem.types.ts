import type { IBoardComment } from '@/src/commons/types/generated/types'

export interface BoardCommentItemProps {
	comment: IBoardComment
	isEdit: boolean
	onClickEdit: () => void
}
