import {
	IQuery,
	IQueryFetchBoardsArgs,
	IQueryFetchBoardsCountArgs
} from '@/src/commons/types/generated/types';
import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

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

const FETCH_BOARDS_COUNT = gql`
	query {
		fetchBoardsCount
	}
`;

const Pagination = styled.span`
	color: ${(props: { isActive: boolean }) => (props.isActive ? 'red' : 'black')};
`;

const PageMoveButton = styled.span`
	color: ${(props: { disabled: boolean }) => (props.disabled ? 'gray' : 'black')};
`;

export const Quiz09_01 = () => {
	const [startPage, setStartPage] = useState(1330);
	const [currentPage, setCurrentPage] = useState(1);
	const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
		FETCH_BOARDS,
		{
			variables: { page: startPage }
		}
	);
	const { data: boardCount } = useQuery<
		Pick<IQuery, 'fetchBoardsCount'>,
		IQueryFetchBoardsCountArgs
	>(FETCH_BOARDS_COUNT);

	const lastPage = Math.ceil((boardCount?.fetchBoardsCount ?? 10) / 10);

	const onClickPage = (event: React.MouseEvent<HTMLButtonElement>) => {
		refetch({ page: Number(event.currentTarget.id) });
		setCurrentPage(Number(event.currentTarget.id));
	};

	useEffect(() => {
		setCurrentPage(startPage);
	}, [startPage]); // 좋은 방법인지..

	const onClickPrevPage = () => {
		if (startPage === 1) return;
		setStartPage((prev) => prev - 10);
	};

	const onClickNextPage = () => {
		if (startPage + 10 >= lastPage) return;
		setStartPage((prev) => prev + 10);
	};

	return (
		<div>
			{data?.fetchBoards.map((board) => (
				<div key={board._id}>
					<button style={{ margin: '10px' }}>{board.title}</button>
					<span style={{ margin: '10px' }}>{board.writer}</span>
				</div>
			))}

			<div>
				<PageMoveButton disabled={startPage === 1} onClick={onClickPrevPage}>
					이전페이지
				</PageMoveButton>
				{new Array(10).fill(1).map(
					(_, index) =>
						index + startPage <= lastPage && (
							<Pagination
								isActive={currentPage === index + startPage}
								key={index + startPage}
								id={String(index + startPage)}
								onClick={onClickPage}
							>
								{index + startPage}
							</Pagination>
						)
				)}
				<PageMoveButton disabled={startPage + 10 >= lastPage} onClick={onClickNextPage}>
					다음페이지
				</PageMoveButton>
			</div>
		</div>
	);
};

export default Quiz09_01;
