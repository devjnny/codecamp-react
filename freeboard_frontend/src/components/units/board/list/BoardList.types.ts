import type { IQuery, IQueryFetchBoardsArgs } from '@/src/commons/types/generated/types'
import type { ApolloQueryResult } from '@apollo/client'

export interface IBoardListProps {
	data?: Pick<IQuery, 'fetchBoards'>
	refetch: (
		variables?: Partial<IQueryFetchBoardsArgs> | undefined
	) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>
	boardsCount: number
	onClickMove: (boardId: string) => void
	onClickWrite: () => void
}

//
