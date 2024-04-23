import { ReactNode } from 'react';
import Header from './header';
import Navigation from './navigation';
import Sidebar from './sidebar';
import Banner from './banner';
import Footer from './footer';

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<Header />
			<Banner />
			<Navigation />
			<div
				style={{
					display: 'flex',
					width: '100%',
					height: 'calc(100vh - 300px)'
				}}
			>
				<Sidebar />
				<div
					id="contents"
					style={{
						position: 'relative',
						width: 'calc(100% - 30%)',
						height: '100%',
						overflowY: 'scroll'
					}}
				>
					{children}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
