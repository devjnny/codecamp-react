import { IBoardComment } from '@/src/commons/types/generated/types'
import {
	Control,
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
	UseFormWatch,
} from 'react-hook-form'

export type IBoardCommnetWrite = IBoardComment & { password: string }

export interface IBoardCommentWriteProps {
	disabled: boolean
	register: UseFormRegister<IBoardCommnetWrite>
	control: Control<IBoardCommnetWrite>
	handleSubmit: UseFormHandleSubmit<IBoardCommnetWrite>
	errors: FieldErrors<IBoardCommnetWrite>
	watch: UseFormWatch<IBoardCommnetWrite>
	onSubmit: (data: IBoardCommnetWrite) => Promise<void>
}