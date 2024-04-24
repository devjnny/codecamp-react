import styled from '@emotion/styled'

export const CommentListItem = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 120px;
	padding: 1rem 0.4rem 2rem;
	border-bottom: 1px solid #bdbdbd;

	& + & {
		margin-top: 2rem;
	}
`

export const CommentContentWrapper = styled.div`
	display: flex;
	gap: 1.2rem;
	width: 100%;
`

export const CommentContentsTop = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;
`

export const CommentWriter = styled.span`
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2.4rem;
`

export const CommentContent = styled.p`
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2.4rem;
	color: #4f4f4f;
	margin-top: 0.4rem;
`

export const CommentDate = styled.span`
	display: inline-block;
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.8rem;
	color: #bdbdbd;
	margin-top: 2rem;
`

export const CommentActionButtons = styled.div`
	display: flex;
	gap: 0.8rem;
`

export const ModifyButton = styled.button`
	width: 2.4rem;
	height: 2.4rem;
	background: url(../icons/icon_modify.png) no-repeat center/2.4rem 2.4rem;
`

export const DeleteButton = styled.button`
	width: 2.4rem;
	height: 2.4rem;
	background: url(../icons/icon_delete.png) no-repeat center/2.4rem 2.4rem;
`
