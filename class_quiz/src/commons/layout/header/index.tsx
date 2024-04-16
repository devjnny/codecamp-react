import styled from "@emotion/styled";

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: red;
`;

export const Header = () => {
  return <StyledHeader>헤더영역</StyledHeader>;
};

export default Header;
