import styled from '@emotion/styled'

const NavigationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 6.4rem;
	background-color: #ffd600;
`

const Menu = styled.a`
	position: relative;
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.664rem;
	color: #ab9000;

	&:not(:first-of-type) {
		padding-left: 81px;
		&:before {
			content: '';
			display: block;
			position: absolute;
			top: 4px;
			left: 40px;
			width: 1px;
			height: 20px;
			background-color: #fff;
		}
	}

	&.active {
		color: #514400;
		font-weight: 700;
	}
`

const Navigation = () => {
	return (
		<div>
			<NavigationContainer>
				<Menu className="active">자유게시판</Menu>
				<Menu>중고마켓</Menu>
				<Menu>마이페이지</Menu>
			</NavigationContainer>
		</div>
	)
}

export default Navigation
