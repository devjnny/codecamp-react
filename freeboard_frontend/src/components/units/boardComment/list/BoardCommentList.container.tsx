import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import BoardCommentListUI from './BoardCommentList.presenter'
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'
import type {
	IMutation,
	IMutationDeleteBoardCommentArgs,
	IQuery,
	IQueryFetchBoardCommentsArgs,
} from '@/src/commons/types/generated/types'
import type { ChangeEvent } from 'react'
import { useState } from 'react'

export default function BoardCommentList() {
	const router = useRouter()
	const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState<boolean>(false)
	const [password, setPassword] = useState<string>('')
	const [boardCommentId, setBoardCommentId] = useState<string>('')

	const [deleteBoardComment] = useMutation<
		Pick<IMutation, 'deleteBoardComment'>,
		IMutationDeleteBoardCommentArgs
	>(DELETE_BOARD_COMMENT)

	const { data, fetchMore } = useQuery<
		Pick<IQuery, 'fetchBoardComments'>,
		IQueryFetchBoardCommentsArgs
	>(
		FETCH_BOARD_COMMENTS,
		typeof router.query.boardId === 'string'
			? {
					variables: {
						boardId: router.query.boardId,
					},
				}
			: { skip: true }
	)

	const onLoadMore = (): void => {
		console.log('??')
		if (data === undefined) return

		void fetchMore({
			variables: {
				page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult?.fetchBoardComments) {
					return {
						fetchBoardComments: [...prev.fetchBoardComments],
					}
				}

				return {
					fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
				}
			},
		})
	}

	const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	const handleDeleteDialog = (event: React.MouseEvent<HTMLButtonElement>) => {
		// 댓글 삭제 시 비밀번호 입력 dialog open
		setBoardCommentId(event.currentTarget?.id)
		setIsOpenDeleteDialog(true)
	}

	const handleDeleteDialogCancel = () => {
		setIsOpenDeleteDialog(false)
	}

	const onClickDelete = async () => {
		try {
			const response = await deleteBoardComment({
				variables: {
					password,
					boardCommentId,
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
				handleDeleteDialogCancel()
			}
		} catch (error) {
			if (error instanceof Error) alert(error)
		}
	}

	return data ? (
		<BoardCommentListUI
			comments={data}
			isOpenDeleteDialog={isOpenDeleteDialog}
			handleDeleteDialog={handleDeleteDialog}
			handleDeleteDialogCancel={handleDeleteDialogCancel}
			onChangeDeletePassword={onChangeDeletePassword}
			onClickDelete={onClickDelete}
			onLoadMore={onLoadMore}
		/>
	) : (
		<div>Loading...</div>
	)
}
