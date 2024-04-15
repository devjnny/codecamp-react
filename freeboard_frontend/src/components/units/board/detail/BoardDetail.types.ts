import type { IQuery } from '@/src/commons/types/generated/types'

export interface IBoardDetailProps {
	data?: Pick<IQuery, 'fetchBoard'>
	onClickDelete: () => void
	onClickEdit: () => void
	onClickLike: () => void
	onClickDislike: () => void
	likeState: 'like' | 'dislike' | ''
}
