import type { ReactNode } from 'react'
import Header from './header'
import Banner from './banner'
import Navigation from './navigation'
import styled from '@emotion/styled'

const Contents = styled.div`
	padding: 8rem 16rem 28rem;
`

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Header></Header>
			<Banner></Banner>
			<Navigation></Navigation>
			<Contents>{children}</Contents>
		</div>
	)
}

export default Layout
