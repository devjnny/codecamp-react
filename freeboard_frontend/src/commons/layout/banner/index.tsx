import styled from '@emotion/styled'
import Slider from 'react-slick'

const StyledSlider = styled(Slider)`
	height: 40rem;
`

const BannerContainer = styled.div`
	width: 100%;
	height: 100%;

	img {
		width: 100%;
		height: 40rem;
	}
`
const bannerImages = [
	'/images/img_banner01.png',
	'/images/img_banner02.png',
	'/images/img_banner03.png',
	'/images/img_banner04.png',
]

const Banner = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<StyledSlider {...settings}>
			{bannerImages.map((img: string) => (
				<BannerContainer key={img}>
					<img src={img} alt="" />
				</BannerContainer>
			))}
		</StyledSlider>
	)
}

export default Banner
