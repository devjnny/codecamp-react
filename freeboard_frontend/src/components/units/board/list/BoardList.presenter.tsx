import Pagination from '@/src/components/common/pagination/Pagination.container'
import * as S from './BoardList.styles'
import type { IBoardListProps } from './BoardList.types'

export default function BoardListlUI({
	data,
	refetch,
	boardsCount,
	onClickMove,
	onClickWrite,
}: IBoardListProps) {
	return (
		<S.Wrapper>
			<S.Title>베스트 게시글</S.Title>
			<S.BestPosts>
				<S.BestPostItem>
					<S.BestPostImg src="" alt="" />
					<S.BestPostContents>
						<S.BestPostTitle>게시물 제목입니다.</S.BestPostTitle>
						<S.BestPostInfo>
							<div>
								<S.BestPostProfile>
									<img
										src="/images/img_profile_small.png"
										alt="프로필이미지"
										width={20}
										height={20}
									/>
									<S.BestPostWriter>노원두</S.BestPostWriter>
								</S.BestPostProfile>
								<S.BestPostDate>Date: 2021.02.18</S.BestPostDate>
							</div>
							<S.GoodButton type="button">356</S.GoodButton>
						</S.BestPostInfo>
					</S.BestPostContents>
				</S.BestPostItem>
				<S.BestPostItem>
					<S.BestPostImg src="" alt="" />
					<S.BestPostContents>
						<S.BestPostTitle>게시물 제목입니다.</S.BestPostTitle>
						<S.BestPostInfo>
							<div>
								<S.BestPostProfile>
									<img
										src="/images/img_profile_small.png"
										alt="프로필이미지"
										width={20}
										height={20}
									/>
									<S.BestPostWriter>노원두</S.BestPostWriter>
								</S.BestPostProfile>
								<S.BestPostDate>Date: 2021.02.18</S.BestPostDate>
							</div>
							<S.GoodButton type="button">356</S.GoodButton>
						</S.BestPostInfo>
					</S.BestPostContents>
				</S.BestPostItem>
				<S.BestPostItem>
					<S.BestPostImg src="" alt="" />
					<S.BestPostContents>
						<S.BestPostTitle>게시물 제목입니다.</S.BestPostTitle>
						<S.BestPostInfo>
							<div>
								<S.BestPostProfile>
									<img
										src="/images/img_profile_small.png"
										alt="프로필이미지"
										width={20}
										height={20}
									/>
									<S.BestPostWriter>노원두</S.BestPostWriter>
								</S.BestPostProfile>
								<S.BestPostDate>Date: 2021.02.18</S.BestPostDate>
							</div>
							<S.GoodButton type="button">356</S.GoodButton>
						</S.BestPostInfo>
					</S.BestPostContents>
				</S.BestPostItem>
				<S.BestPostItem>
					<S.BestPostImg src="" alt="" />
					<S.BestPostContents>
						<S.BestPostTitle>게시물 제목입니다.</S.BestPostTitle>
						<S.BestPostInfo>
							<div>
								<S.BestPostProfile>
									<img
										src="/images/img_profile_small.png"
										alt="프로필이미지"
										width={20}
										height={20}
									/>
									<S.BestPostWriter>노원두</S.BestPostWriter>
								</S.BestPostProfile>
								<S.BestPostDate>Date: 2021.02.18</S.BestPostDate>
							</div>
							<S.GoodButton type="button">356</S.GoodButton>
						</S.BestPostInfo>
					</S.BestPostContents>
				</S.BestPostItem>
			</S.BestPosts>
			<S.SearchSection>
				<S.SearchInput type="text" placeholder="제목을 검색해주세요." />
				<S.DateInput type="text" placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
				<S.SearchButton type="button">검색하기</S.SearchButton>
			</S.SearchSection>
			<S.TableWrapper>
				<S.Table>
					<caption>
						<span className="hidden">게시물 리스트 표. 번호, 제목, 작성자, 날짜로 구성</span>
					</caption>
					<colgroup>
						<col style={{ width: '10%' }} />
						<col style={{ width: '50%' }} />
						<col style={{ width: '20%' }} />
						<col style={{ width: '20%' }} />
					</colgroup>
					<thead>
						<S.TableRow>
							<S.TableTh scope="col">번호</S.TableTh>
							<S.TableTh scope="col">제목</S.TableTh>
							<S.TableTh scope="col">작성자</S.TableTh>
							<S.TableTh scope="col">날짜</S.TableTh>
						</S.TableRow>
					</thead>
					<tbody>
						{data?.fetchBoards.map((board, index) => (
							<S.TableRow
								key={board._id}
								onClick={() => {
									onClickMove(board._id)
								}}>
								<S.TableTd>{data.fetchBoards.length - index}</S.TableTd>
								<S.TableTd>
									<S.BoardTitle>{board.title}</S.BoardTitle>
								</S.TableTd>
								<S.TableTd>{board.writer}</S.TableTd>
								<S.TableTd>{board.createdAt.split('T')[0]}</S.TableTd>
							</S.TableRow>
						))}
					</tbody>
				</S.Table>
				<S.TableFooter>
					<Pagination refetch={refetch} boardsCount={boardsCount} />
					<S.BoardWriteButton type="button" onClick={onClickWrite}>
						게시물 등록하기
					</S.BoardWriteButton>
				</S.TableFooter>
			</S.TableWrapper>
		</S.Wrapper>
	)
}
