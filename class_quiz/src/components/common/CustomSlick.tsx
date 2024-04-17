import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button } from 'antd';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 1200px;
	height: 1000px;
	overflow: hidden;
`;

const SwiperContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;

	* {
		width: 1200px;
	}
`;

const SwiperButtons = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const SwiperPagination = styled.div`
	display: flex;
	justify-content: center;
	gap: 4px;
	width: 100%;
	height: auto;
	padding: 10px;
`;

const PaginationButton = styled.button`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background-color: #000;
	opacity: 0.3;
	border: none;

	&.on {
		opacity: 1;
	}
`;

export const CustomSlick = ({ children }: { children: React.ReactNode }) => {
	const numberOfChildren = React.Children.count(children);
	const totalSlide = numberOfChildren - 1;

	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const slideRef = useRef<HTMLDivElement>(null);

	const onClickPrev = () => {
		currentSlide === 0 ? setCurrentSlide(2) : setCurrentSlide((prev) => prev - 1);
	};

	const onClickNext = () => {
		currentSlide >= totalSlide ? setCurrentSlide(0) : setCurrentSlide((prev) => prev + 1);
	};

	const onClickPagination = (index: number) => {
		setCurrentSlide(index);
	};

	useEffect(() => {
		if (slideRef.current) {
			slideRef.current.style.transition = 'all 0.5s ease-in-out';
			slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
		}
	}, [currentSlide]);

	return (
		<Wrapper>
			<Container>
				<SwiperContainer ref={slideRef}>{children}</SwiperContainer>
				<SwiperButtons>
					<Button type="text" icon={<LeftOutlined />} onClick={onClickPrev}>
						<span className="hidden">이전</span>
					</Button>
					<Button type="text" icon={<RightOutlined />} onClick={onClickNext}>
						<span className="hidden">다음</span>
					</Button>
				</SwiperButtons>
				<SwiperPagination>
					{Array(numberOfChildren)
						.fill(0)
						.map((_, index) => (
							<PaginationButton
								key={index}
								onClick={() => onClickPagination(index)}
								className={index === currentSlide ? 'on' : ''}
							>
								<span className="hidden">{index + 1}</span>
							</PaginationButton>
						))}
				</SwiperPagination>
			</Container>
		</Wrapper>
	);
};

export default CustomSlick;
