import type { IQuery } from '@/src/commons/types/generated/types'

export interface IBoardListProps {
	data?: Pick<IQuery, 'fetchBoards'>
	onClickMove: (boardId: string) => void
	onClickWrite: () => void
}

//
