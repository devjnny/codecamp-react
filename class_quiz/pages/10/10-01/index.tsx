import {
	IQuery,
	IQueryFetchBoardsArgs,
	IQueryFetchBoardsCountArgs
} from '@/src/commons/types/generated/types';
import { useQuery, gql } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroller';

const FETCH_BOARDS = gql`
	query fetchBoards($page: Int) {
		fetchBoards(page: $page) {
			_id
			writer
			title
			contents
		}
	}
`;

export const Quiz10_01 = () => {
	const { data, fetchMore } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
		FETCH_BOARDS
	);

	const onLoadMore = () => {
		if (data === undefined) return;
		void fetchMore({
			variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult?.fetchBoards) {
					return {
						fetchBoards: [...prev.fetchBoards]
					};
				}

				return {
					fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
				};
			}
		});
	};

	return (
		<div style={{ height: '500px', overflow: 'auto' }}>
			<InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true} useWindow={false}>
				{(data?.fetchBoards ?? []).map((board) => (
					<div key={board._id}>
						<button style={{ margin: '10px' }}>{board.title}</button>
						<span style={{ margin: '10px' }}>{board.writer}</span>
					</div>
				))}
			</InfiniteScroll>
		</div>
	);
};

export default Quiz10_01;
