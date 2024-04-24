import type { ApolloQueryResult } from '@apollo/client'
import type { IQuery, IQueryFetchBoardsArgs } from '../../../commons/types/generated/types'

export interface IPagenationProps {
	refetch: (
		variables?: Partial<IQueryFetchBoardsArgs> | undefined
	) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>
	boardsCount: number
}

export interface IPagenationUIProps {
	startPage: number
	activePage: number
	lastPage: number
	onClickPage: (event: React.MouseEvent<HTMLButtonElement>) => void
	onClickPrev: () => void
	onClickNext: () => void
}
