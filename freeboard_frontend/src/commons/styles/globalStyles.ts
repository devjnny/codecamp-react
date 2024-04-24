import { css } from '@emotion/react'

export const globalStyles = css`
	@font-face {
		font-family: 'Jua';
		src: url('/fonts/Jua-Regular.ttf');
	}
	* {
		margin: 0;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		background-color: unset;
		list-style-type: none;
		font-family: 'Jua', sans-serif;
	}

	html {
		font-size: 62.5%;
	}

	button {
		border: none;
	}

	.hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		overflow: hidden;
		clip-path: polygon(0 0, 0 0, 0 0);
	}
`
