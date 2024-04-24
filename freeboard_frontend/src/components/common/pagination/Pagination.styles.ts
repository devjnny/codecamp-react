import styled from '@emotion/styled'

export const PaginationWrapper = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
`

export const Pagination = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	margin-top: 5.4rem;
`

export const PaginationPrevButton = styled.button`
	width: 2.4rem;
	height: 2.4rem;
	background: url(../icons/icon_arrow_left.png) no-repeat center/2.4rem 2.4rem;
`

export const PaginationNextButton = styled.button`
	width: 2.4rem;
	height: 2.4rem;
	background: url(../icons/icon_arrow_right.png) no-repeat center/2.4rem 2.4rem;
`

export const Page = styled.button`
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 1.92rem;
	color: #4f4f4f;

	&.active {
		color: #ffd600;
		border-bottom: 1px solid #ffd600;
	}
`

export const BoardWriteButton = styled.button`
	position: absolute;
	top: 4rem;
	right: 0;
	font-size: 1.6rem;
	font-weight: 500;
	padding: 1.4rem 1.6rem 1.4rem 4.8rem;
	border: 1px solid #bdbdbd;
	border-radius: 8px;
	background: url(../icons/icon_write.png) no-repeat 1.6rem 1.4rem/2.4rem 2.4rem;
`
