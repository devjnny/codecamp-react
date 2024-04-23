import { IQuery, IQueryFetchBoardsArgs } from '@/src/commons/types/generated/types';
import { useQuery, gql } from '@apollo/client';
import { ReactNode, RefObject, useEffect, useRef, useState } from 'react';

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

interface IInfiniteScrollProps {
	isLoading: boolean;
	loadMore: () => void;
	hasMore: boolean;
	children: ReactNode;
}

const isBottom = (ref: RefObject<HTMLDivElement>) => {
	if (!ref.current) return false;
	const container = document.getElementById('contents');
	if (!container) return false;

	const { scrollTop, clientHeight, scrollHeight } = container;
	return scrollHeight - scrollTop <= clientHeight;
};

const InfiniteScroll = ({ isLoading, loadMore, hasMore, children }: IInfiniteScrollProps) => {
	// 컴포넌트에서 특정 DOM을 선택 / 조회 / 수정
	// 대표적으로 관리할 수 있는 값으로는 setTimeout(), setInterval(), scroll 위치, 외부 라이브러리로 생성된 인스턴스..
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const onScroll = () => {
			if (!isLoading && hasMore && isBottom(ref)) {
				loadMore();
			}
		};
		document.getElementById('contents')?.addEventListener('scroll', onScroll);
		return () => document.getElementById('contents')?.removeEventListener('scroll', onScroll);
	}, [loadMore, isLoading, hasMore]);
	return <div ref={ref}>{children}</div>;
};

export const Quiz10_02 = () => {
	const [isLoading, setLoading] = useState(false);

	const { data, fetchMore } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
		FETCH_BOARDS
	);

	const onLoadMore = () => {
		// 스크롤이 하단에 닿으면 데이터 fetch
		setTimeout(() => {
			setLoading(true);
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
			setLoading(false);
		}, 1000);
	};

	return (
		<InfiniteScroll
			isLoading={isLoading}
			loadMore={onLoadMore}
			hasMore={!!data?.fetchBoards.length}
		>
			{(data?.fetchBoards ?? []).map((board) => (
				<div key={board._id}>
					<button style={{ margin: '10px' }}>{board.title}</button>
					<span style={{ margin: '10px' }}>{board.writer}</span>
				</div>
			))}
		</InfiniteScroll>
	);
};

export default Quiz10_02;
