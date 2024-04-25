import type {
	IBoardComment,
	IMutation,
	IMutationDeleteBoardCommentArgs,
} from '@/src/commons/types/generated/types'
import BoardCommentItemUI from './BoardCommentItem.presenter'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import Dialog from '@/src/components/common/Dialog'
import { useMutation } from '@apollo/client'
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries'
import { useRouter } from 'next/router'

export default function BoardCommentItem({ comment }: { comment: IBoardComment }) {
	const router = useRouter()
	const [isEdit, setEdit] = useState<boolean>(false)
	const [password, setPassword] = useState<string>('')
	const [isOpenDialog, setOpenDialog] = useState<boolean>(false)

	const [deleteBoardComment] = useMutation<
		Pick<IMutation, 'deleteBoardComment'>,
		IMutationDeleteBoardCommentArgs
	>(DELETE_BOARD_COMMENT)

	const onClickEdit = () => {
		setEdit((prev) => !prev)
	}

	const handleOpenDialog = () => {
		setOpenDialog((prev) => !prev)
	}

	const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	const onClickDelete = async () => {
		try {
			const response = await deleteBoardComment({
				variables: {
					password,
					boardCommentId: comment._id,
				},
				refetchQueries: [
					{
						query: FETCH_BOARD_COMMENTS,
						variables: {
							boardId: router.query.boardId,
						},
					},
				],
			})
			if (response.data) {
				handleOpenDialog()
			}
		} catch (error) {
			if (error instanceof Error) alert(error)
		}
	}

	return (
		<>
			{isOpenDialog && (
				<Dialog
					title="비밀번호 입력"
					showDialog={isOpenDialog}
					onClickOk={onClickDelete}
					onClickCancel={handleOpenDialog}>
					<input type="password" style={{ width: '100%' }} onChange={onChangePassword} />
				</Dialog>
			)}
			<BoardCommentItemUI
				comment={comment}
				isEdit={isEdit}
				onClickEdit={onClickEdit}
				onClickDelete={handleOpenDialog}
			/>
		</>
	)
}
