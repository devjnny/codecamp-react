//import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppProps } from 'next/app'

export default function App({ Component }: AppProps) {
	//graphQL setting
	const client = new ApolloClient({
		uri: 'http://backend-example.codebootcamp.co.kr/graphql',
		cache: new InMemoryCache(), //컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시 저장
	})

	return (
		//컴포넌트에서 graphQL 셋팅을 쓸 수 있도록 전달
		<ApolloProvider client={client}>
			<Component />
		</ApolloProvider>
	)
}
