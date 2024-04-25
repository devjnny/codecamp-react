import styled from '@emotion/styled'
import { DatePicker } from 'antd'
const { RangePicker } = DatePicker

export const Wrapper = styled.div`
	width: 120rem;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`

export const Title = styled.h1`
	font-size: 3.6rem;
	font-weight: 700;
	text-align: center;
`

export const BestPosts = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 4rem;
`
export const BestPostItem = styled.div`
	width: calc((100% - 7.2rem) / 4);
	height: 25.7rem;
	border-radius: 10px;
	box-shadow: 0.5rem 0.5rem 1rem 0rem #0000001a;
	overflow: hidden;
`

export const BestPostImg = styled.img`
	width: 100%;
	height: 12rem;
	background-color: gray;
`

export const BestPostContents = styled.div`
	width: 100%;
	height: calc(100% - 12rem);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 2rem;
`

export const BestPostTitle = styled.p`
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.664rem;
`

export const BestPostInfo = styled.div`
	display: flex;
	justify-content: space-between;
`

export const BestPostProfile = styled.div`
	display: flex;
	align-items: center;
`

export const BestPostWriter = styled.span`
	display: inline-block;
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 2.368rem;
	margin-left: 0.4rem;
`

export const BestPostDate = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.776rem;
	color: #828282;
	margin-top: 0.8rem;
`

export const GoodButton = styled.button`
	background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_47_497)'%3E%3Cpath d='M13.11 5.72L12.54 8.61C12.42 9.2 12.58 9.81 12.96 10.27C13.34 10.73 13.9 11 14.5 11H20V12.08L17.43 18H9.34C9.16 18 9 17.84 9 17.66V9.82L13.11 5.72ZM14 2L7.59 8.41C7.21 8.79 7 9.3 7 9.83V17.66C7 18.95 8.05 20 9.34 20H17.44C18.15 20 18.8 19.63 19.16 19.03L21.83 12.88C21.94 12.63 22 12.36 22 12.08V11C22 9.9 21.1 9 20 9H14.5L15.42 4.35C15.47 4.13 15.44 3.89 15.34 3.69C15.11 3.24 14.82 2.83 14.46 2.47L14 2ZM4 9H2V20H4C4.55 20 5 19.55 5 19V10C5 9.45 4.55 9 4 9Z' fill='%23828282'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_47_497'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
	background-repeat: no-repeat;
	background-position: top center;
	padding-top: 2.4rem;
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 2.368rem;
	color: #828282;

	&.on {
		background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_47_497)'%3E%3Cpath d='M13.11 5.72L12.54 8.61C12.42 9.2 12.58 9.81 12.96 10.27C13.34 10.73 13.9 11 14.5 11H20V12.08L17.43 18H9.34C9.16 18 9 17.84 9 17.66V9.82L13.11 5.72ZM14 2L7.59 8.41C7.21 8.79 7 9.3 7 9.83V17.66C7 18.95 8.05 20 9.34 20H17.44C18.15 20 18.8 19.63 19.16 19.03L21.83 12.88C21.94 12.63 22 12.36 22 12.08V11C22 9.9 21.1 9 20 9H14.5L15.42 4.35C15.47 4.13 15.44 3.89 15.34 3.69C15.11 3.24 14.82 2.83 14.46 2.47L14 2ZM4 9H2V20H4C4.55 20 5 19.55 5 19V10C5 9.45 4.55 9 4 9Z' fill='%23FFD600'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_47_497'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
		color: #000;
	}
`

export const SearchSection = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 8rem;
`

export const SearchInput = styled.input`
	width: 77.6rem;
	height: 5.2rem;
	background: url(../icons/icon_search.png) no-repeat 1.6rem 1.4rem/2.4rem 2.4rem;
	background-color: #f2f2f2;
	border-radius: 10px;
	border: none;
	padding: 1.4rem 1.6rem 1.4rem 4.6rem;
	&::placeholder {
		color: #000;
	}
`

export const DateInput = styled(RangePicker)`
	min-width: 25rem;
	height: 5.2rem;
	border: 1px solid #bdbdbd;
	padding: 1.4rem 1.6rem;
	input::placeholder {
		font-size: 1.6rem;
		line-height: 2.4rem;
		font-weight: 400;
		color: #bdbdbd;
	}
	&:hover {
		border-color: initial;
	}
`

export const DateSeperator = styled.span`
	font-size: 1.6rem;
	line-height: 2.4rem;
	font-weight: 400;
	color: #bdbdbd;
`

export const SearchButton = styled.button`
	font-size: 1.6rem;
	font-weight: 500;
	background-color: #000;
	color: #fff;
	padding: 1.4rem 1.6rem;
	border-radius: 10px;
`

export const TableWrapper = styled.div`
	width: 100%;
	margin-top: 4rem;
`

export const Table = styled.table`
	width: 100%;
	border-top: 1px solid #000;
	border-bottom: 1px solid #000;
	border-collapse: collapse;
`

export const TableRow = styled.tr`
	border-bottom: 1px solid #bdbdbd;
	&:last-child {
		border: none;
	}
`

export const TableTh = styled.th`
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.664rem;
	padding: 1.2rem 0;
	border-bottom: 1px solid #bdbdbd;
`

export const TableTd = styled.td`
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 2.368rem;
	text-align: center;
	padding: 1.4rem 0;
`

export const BoardTitle = styled.button`
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 2.368rem;
	text-align: center;
`

export const TableFooter = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
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
