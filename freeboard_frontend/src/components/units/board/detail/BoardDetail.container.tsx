import { useMutation, useQuery } from '@apollo/client'
import type { NextRouter } from 'next/router'
import { useRouter } from 'next/router'
import BoardDetailUI from './BoardDetail.presenter'
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD } from './BoardDetail.queries'
import type {
	IMutation,
	IMutationDeleteBoardArgs,
	IMutationDislikeBoardArgs,
	IMutationLikeBoardArgs,
	IQuery,
	IQueryFetchBoardArgs,
} from '@/src/commons/types/generated/types'
import { useState } from 'react'

export default function BoardDetail() {
	const [likeState, setLikeState] = useState<'like' | 'dislike' | ''>('')
	const router: NextRouter = useRouter()
	const boardId: string = typeof router.query.boardId === 'string' ? router.query.boardId : ''

	const [deleteBoard] = useMutation<Pick<IMutation, 'deleteBoard'>, IMutationDeleteBoardArgs>(
		DELETE_BOARD
	)
	const [likeBoard] = useMutation<Pick<IMutation, 'likeBoard'>, IMutationLikeBoardArgs>(LIKE_BOARD)
	const [dislikeBoard] = useMutation<Pick<IMutation, 'dislikeBoard'>, IMutationDislikeBoardArgs>(
		DISLIKE_BOARD
	)
	const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
		variables: {
			boardId,
		},
	})

	const onClickEdit = () => {
		// 수정하기
		void router.push(`/boards/${boardId}/edit`)
	}

	const onClickDelete = () => {
		const result = deleteBoard({
			variables: {
				boardId,
			},
		})
		console.log(result)
		void router.push('/boards')
	}

	const onClickLike = async () => {
		const { data } = await likeBoard({
			variables: {
				boardId,
			},
			refetchQueries: [
				{
					query: FETCH_BOARD,
					variables: {
						boardId,
					},
				},
			],
		})
		if (data) setLikeState('like')
	}

	const onClickDislike = async () => {
		const { data } = await dislikeBoard({
			variables: {
				boardId,
			},
			refetchQueries: [
				{
					query: FETCH_BOARD,
					variables: { boardId },
				},
			],
		})
		if (data) setLikeState('dislike')
	}

	return (
		<BoardDetailUI
			data={data}
			onClickDelete={onClickDelete}
			onClickEdit={onClickEdit}
			onClickLike={onClickLike}
			onClickDislike={onClickDislike}
			likeState={likeState}
		/>
	)
}
