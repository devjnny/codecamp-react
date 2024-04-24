import { useState } from 'react'
import PaginationUI from './Pagination.presenter'
import type { IPagenationProps } from './Pagination.types'

export default function Pagination({ refetch, boardsCount }: IPagenationProps) {
	const [startPage, setStartPage] = useState(1)
	const [activePage, setActivePage] = useState(1)

	const lastPage = Math.ceil(boardsCount / 10)

	const onClickPrev = () => {
		if (startPage === 1) return
		setStartPage((prev) => prev - 10)
		setActivePage(startPage - 10)
		void refetch({ page: startPage - 10 })
	}

	const onClickNext = () => {
		if (startPage + 10 >= lastPage) return
		setStartPage((prev) => prev + 10)
		setActivePage(startPage + 10)
		void refetch({ page: startPage + 10 })
	}

	const onClickPage = (event: React.MouseEvent<HTMLButtonElement>) => {
		const activePage = Number(event.currentTarget.id)
		setActivePage(activePage)
		void refetch({ page: activePage })
	}

	return (
		<PaginationUI
			startPage={startPage}
			activePage={activePage}
			lastPage={lastPage}
			onClickPage={onClickPage}
			onClickPrev={onClickPrev}
			onClickNext={onClickNext}
		/>
	)
}
