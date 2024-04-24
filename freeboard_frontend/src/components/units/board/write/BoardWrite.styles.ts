import styled from '@emotion/styled'

export const Wrapper = styled.div`
	width: 120rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 6rem 10rem 10rem;
	margin: 0 auto;
	box-shadow: 0 0.4rem 2rem 0 #00000033;
`

export const PageTitle = styled.h1`
	font-size: 3.6rem;
	font-weight: 700;
	line-height: 5.3rem;
`

export const FormsWrapper = styled.form`
	width: 100%;
	margin: 4rem 0 8rem;
`

export const FormRowWrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 2.4rem;
	justify-content: space-between;

	& > div {
		width: calc((100% - 2.4rem) / 2);
	}
`

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 4rem;
`

export const FormLabel = styled.span`
	display: block;
	margin-bottom: 1.6rem;
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2.4rem;
`

export const FormInput = styled.input`
	width: 100%;
	height: 5.2rem;
	border: 1px solid rgba(189, 189, 189, 1);
	padding: 1.4rem 1.6rem;
	border-radius: 5px;
`

export const FormTextArea = styled.textarea`
	width: 100%;
	height: 48rem;
	border: 1px solid rgba(189, 189, 189, 1);
	border-radius: 5px;
	padding: 1.4rem 1.6rem;
`

export const ZipcodeWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 1.6rem;
	margin: 0 0 1.6rem;

	& + input + input {
		margin-top: 1.6rem;
	}
`

export const ZipcodeInput = styled.input`
	width: 7.7rem;
	height: 5.2rem;
	padding: 1.4rem 1.6rem;
	border: 1px solid rgba(189, 189, 189, 1);
	border-radius: 5px;
`

export const ZipcodeButton = styled.button`
	height: 5.2rem;
	padding: 1.4rem 1.6rem;
	background-color: #000;
	color: #fff;
	border-radius: 5px;
`

export const UploadWrapper = styled.div`
	display: flex;
	gap: 2.4rem;
`

export const UploadButton = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 7.8rem;
	height: 7.8rem;
	position: relative;
	background: rgba(189, 189, 189, 1);
	border: none;
	border-radius: 5px;
	font-size: 1.2rem;
	font-weight: 500;
	line-height: 1.8rem;
	color: rgba(79, 79, 79, 1);
	padding-top: 4.2rem;

	&:before {
		content: '';
		position: absolute;
		top: 1.8rem;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 2.4rem;
		height: 2.4rem;
		background: url(../../icons/icon_plus.png) no-repeat center/2.4rem 2.4rem;
	}
`

export const RadioWrapper = styled.div`
	display: flex;
	gap: 2rem;
`

export const RadioLabel = styled.label`
	display: flex;
	align-items: center;
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2.4rem;
`

export const Radiobutton = styled.input`
	width: 2rem;
	height: 2rem;
	border: 1px solid rgba(0, 0, 0, 1);
	margin-right: 0.8rem;
`

export const SubmitButton = styled.input`
	display: block;
	padding: 1.4rem 6rem;
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2.4rem;
	background-color: ${(props: { isActive: boolean }) => (props.isActive ? '#FFD600' : '#bdbdbd')};
	border: none;
	border-radius: 5px;
	margin: 8rem auto 0;
`

export const ErrorText = styled.p`
	font-size: 1.2rem;
	font-weight: 500;
	margin-top: 0.4rem;
	color: red;
`
