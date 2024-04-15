import type { ICreateBoardInput } from '@/src/commons/types/generated/types'
import type { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

interface IFetchBoard {
	fetchBoard: ICreateBoardInput
}

export interface IBoardWriteProps {
	isEdit: boolean
	data?: IFetchBoard
}

export interface IBoardWriteUIProps {
	isEdit: boolean
	register: UseFormRegister<ICreateBoardInput>
	handleSubmit: UseFormHandleSubmit<ICreateBoardInput>
	errors: FieldErrors<ICreateBoardInput>
	onClickSubmit: (data: ICreateBoardInput) => Promise<void>
	onClickUpdate: (data: ICreateBoardInput) => Promise<void>
	isActive: boolean
}
