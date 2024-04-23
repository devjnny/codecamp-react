import styled from '@emotion/styled'

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 6.2rem 36rem 5.8rem;
`
const Logo = styled.h1`
	width: 23.6rem;
	height: 3.6rem;
	background: url(/images/img_logo.png) no-repeat center/100%;
`

const ButtonWrapper = styled.div`
	display: flex;
	gap: 0.4rem;
`

const Button = styled.button`
	padding: 1rem 1.6rem;
	border-radius: 10px;
	font-size: 1.6rem;
	font-weight: 700;
	line-height: 2.368rem;
	background-color: ${(props: { color: string }) => props.color};
`

const Header = () => {
	return (
		<HeaderContainer>
			<Logo>
				<span className="hidden">codecamp</span>
			</Logo>
			<ButtonWrapper>
				<Button color="#fff">로그인</Button>
				<Button color="#FFD600">회원가입</Button>
			</ButtonWrapper>
		</HeaderContainer>
	)
}

export default Header
