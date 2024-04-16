import Slick from "@/src/components/common/Slick";
import styled from "@emotion/styled";

const StyledBannerWrapper = styled.div`
  width: 100%;
  height: 150px;
  background-color: pink;
`;

const StyledBanner = styled.div`
  width: 100%;
  height: 100px;
`;

export const Banner = () => {
  return (
    <StyledBannerWrapper>
      <Slick>
        <StyledBanner>
          <img
            src="/08/img01.png"
            alt=""
            width={100}
            height={100}
            style={{ margin: "0 auto" }}
          />
        </StyledBanner>
        <StyledBanner>
          <img
            src="/08/img02.jpg"
            alt=""
            width={100}
            height={100}
            style={{ margin: "0 auto" }}
          />
        </StyledBanner>
        <StyledBanner>
          <img
            src="/08/img03.jpg"
            alt=""
            width={100}
            height={100}
            style={{ margin: "0 auto" }}
          />
        </StyledBanner>
      </Slick>
    </StyledBannerWrapper>
  );
};

export default Banner;
