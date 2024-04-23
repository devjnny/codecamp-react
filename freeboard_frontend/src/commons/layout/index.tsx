import type { ReactNode } from 'react'
import Header from './header'
import Banner from './banner'
import Navigation from './navigation'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Header></Header>
			<Banner></Banner>
			<Navigation></Navigation>
			{children}
		</div>
	)
}

export default Layout
