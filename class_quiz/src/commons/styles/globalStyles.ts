import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    font-size: 30px;
    box-sizing: border-box;
    font-family: "scifibit";
  }

  @font-face {
    font-family: "scifibit";
    src: url("/fonts/scifibit.ttf");
  }
`;

export default globalStyles;
