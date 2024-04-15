import { useRef } from 'react'
import Rating from '../Rating/Rating.container'
import * as S from './BoardCommentItem.styles'
import { StarButtonWrapper } from '../Rating/Rating.styles'
import type { BoardCommentItemProps } from './BoardCommentItem.types'
import BoardCommentWrite from '../write/BoardCommentWrite.container'

export default function BoardCommentItemUI({
	comment,
	isEdit,
	onClickEdit,
}: BoardCommentItemProps) {
	const ref = useRef<HTMLInputElement>(null)

	return !isEdit ? (
		<S.CommentListItem key={comment._id}>
			<S.CommentContentWrapper>
				<img src="/images/img_profile.png" width={40} height={40} alt="프로필 사진" />
				<div>
					<S.CommentContentsTop>
						<S.CommentWriter>{comment.writer}</S.CommentWriter>
						<StarButtonWrapper>
							{[1, 2, 3, 4, 5].map((count, index) => (
								<Rating
									type="radio"
									key={index}
									value={comment.rating}
									index={index}
									ref={ref}
									className={index < comment.rating ? 'on' : ''}
								/>
							))}
						</StarButtonWrapper>
					</S.CommentContentsTop>
					<S.CommentContent>{comment.contents}</S.CommentContent>
					<S.CommentDate>{comment.createdAt.split('T')[0]}</S.CommentDate>
				</div>
			</S.CommentContentWrapper>
			<S.CommentActionButtons>
				<S.ModifyButton type="button" onClick={onClickEdit}>
					<span className="hidden">수정</span>
				</S.ModifyButton>
				<S.DeleteButton type="button">
					<span className="hidden">삭제</span>
				</S.DeleteButton>
			</S.CommentActionButtons>
		</S.CommentListItem>
	) : (
		<BoardCommentWrite comment={comment} onClickEdit={onClickEdit} />
	)
}
