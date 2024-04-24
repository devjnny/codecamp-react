import * as S from './Pagination.styles'
import type { IPagenationUIProps } from './Pagination.types'

export default function PaginationUI(props: IPagenationUIProps) {
	return (
		<S.PaginationWrapper>
			<S.Pagination>
				<S.PaginationPrevButton type="button" onClick={props.onClickPrev}>
					<span className="hidden">이전</span>
				</S.PaginationPrevButton>
				{Array(10)
					.fill(0)
					.filter((_, index) => {
						return index + props.startPage <= props.lastPage
					})
					.map((_, index) => (
						<S.Page
							key={index + props.startPage}
							type="button"
							id={String(index + props.startPage)}
							className={index + props.startPage === props.activePage ? 'active' : ''}
							onClick={props.onClickPage}>
							{index + props.startPage}
						</S.Page>
					))}
				<S.PaginationNextButton type="button" onClick={props.onClickNext}>
					<span className="hidden">다음</span>
				</S.PaginationNextButton>
			</S.Pagination>
		</S.PaginationWrapper>
	)
}
