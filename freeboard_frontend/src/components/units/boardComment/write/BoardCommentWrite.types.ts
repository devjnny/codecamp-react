import type { IBoardComment } from '@/src/commons/types/generated/types'
import type { ReactNode } from 'react'
import type {
	Control,
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
	UseFormWatch,
} from 'react-hook-form'

export type IBoardCommnetWrite = IBoardComment & { password: string }

export interface IBoardCommentWriteProps {
	children?: ReactNode
	comment?: IBoardComment
	onClickEdit?: () => void
}

export interface IBoardCommentWriteUIProps {
	disabled: boolean
	register: UseFormRegister<IBoardCommnetWrite>
	control: Control<IBoardCommnetWrite>
	handleSubmit: UseFormHandleSubmit<IBoardCommnetWrite>
	errors: FieldErrors<IBoardCommnetWrite>
	watch: UseFormWatch<IBoardCommnetWrite>
	onSubmit: (data: IBoardCommnetWrite) => Promise<void>
	children?: ReactNode
	isEdit: boolean
}
