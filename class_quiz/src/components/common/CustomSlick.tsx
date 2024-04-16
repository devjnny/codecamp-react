import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;
`;

const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const SwiperItem = styled.div`
  width: 100%;
  height: 100%;
`;

const SwiperButtons = styled.div``;

const SwiperPagination = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const CustomSlick = () => {
  return (
    <Wrapper>
      <Container>
        <SwiperContainer>
          <SwiperItem>
            <img src="/08/img01.png" alt="" />
          </SwiperItem>
          <SwiperItem>
            <img src="/08/img02.jpg" alt="" />
          </SwiperItem>
          <SwiperItem>
            <img src="/08/img03.jpg" alt="" />
          </SwiperItem>
        </SwiperContainer>
        <SwiperButtons>
          <button>이전</button>
          <button>다음</button>
        </SwiperButtons>
        <SwiperPagination>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </SwiperPagination>
      </Container>
    </Wrapper>
  );
};

export default CustomSlick;
