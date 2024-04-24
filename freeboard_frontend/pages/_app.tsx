import type { AppProps } from 'next/app'
import { globalStyles } from '@/src/commons/styles/globalStyles'
import { Global } from '@emotion/react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Layout from '@/src/commons/layout'
import '@/styles/slick.css'
import '@/styles/slick-theme.css'

export default function App({ Component, pageProps }: AppProps) {
	const client = new ApolloClient({
		uri: 'https://backend-practice.codebootcamp.co.kr/graphql',
		cache: new InMemoryCache(),
	})

	return (
		<ApolloProvider client={client}>
			<Global styles={globalStyles} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	)
}
