import type { IBoardComment } from '@/src/commons/types/generated/types'
import BoardCommentItemUI from './BoardCommentItem.presenter'
import { useState } from 'react'

export default function BoardCommentItem({
	comment,
	onClickDelete,
}: {
	comment: IBoardComment
	onClickDelete: () => void
}) {
	const [isEdit, setEdit] = useState<boolean>(false)
	const onClickEdit = () => {
		setEdit((prev) => !prev)
	}

	return (
		<BoardCommentItemUI
			comment={comment}
			isEdit={isEdit}
			onClickEdit={onClickEdit}
			onClickDelete={onClickDelete}
		/>
	)
}
