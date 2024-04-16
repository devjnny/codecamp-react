import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import BoardCommentListUI from './BoardCommentList.presenter'
// import { DELETE_BOARD_COMMENT } from './BoardCommentList.queries'
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'
import type {
	// IMutation,
	// IMutationDeleteBoardCommentArgs,
	IQuery,
	IQueryFetchBoardCommentsArgs,
} from '@/src/commons/types/generated/types'
import { useState } from 'react'

export default function BoardCommentList() {
	const router = useRouter()
	const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState<boolean>(false)
	// const [password, setPassword] = useState<string>('')
	// const [deleteCommentId, setDeleteCommentId] = useState<string>('')

	// const [deleteBoardComment] = useMutation<
	// 	Pick<IMutation, 'deleteBoardComment'>,
	// 	IMutationDeleteBoardCommentArgs
	// >(DELETE_BOARD_COMMENT)

	const { data } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(
		FETCH_BOARD_COMMENTS,
		typeof router.query.boardId === 'string'
			? {
					variables: {
						boardId: router.query.boardId,
					},
				}
			: { skip: true }
	)
	const onChangeDeletePassword = () => {}

	const handleDeleteDialog = () => {
		setIsOpenDeleteDialog(true)
	}

	const handleDeleteDialogCancel = () => {
		setIsOpenDeleteDialog(false)
	}

	// const onClickDelete = async () => {
	// 	try {
	// 		await deleteBoardComment({
	// 			variables: {
	// 				password,
	// 			},
	// 		})
	// 	} catch (error) {
	// 		if (error instanceof Error) alert(error)
	// 	}
	// }

	return data ? (
		<BoardCommentListUI
			comments={data}
			isOpenDeleteDialog={isOpenDeleteDialog}
			handleDeleteDialog={handleDeleteDialog}
			handleDeleteDialogCancel={handleDeleteDialogCancel}
			onChangeDeletePassword={onChangeDeletePassword}
		/>
	) : (
		<div>Loading...</div>
	)
}
