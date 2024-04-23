import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const Quiz11_01 = () => {
	const router = useRouter();
	const [isChange, setChange] = useState(false);

	useEffect(() => {
		alert('Rendered!');
		return () => alert('Bye!!');
	}, []);

	useEffect(() => {
		alert('Changed!!');
	}, [isChange]);

	const onClickChange = () => {
		setChange(true);
	};

	const onClickMove = () => {
		router.push('/');
	};
	return (
		<>
			<div>isChange: {isChange}</div>
			<button onClick={onClickChange}>변경</button>
			<button onClick={onClickMove}>이동</button>
		</>
	);
};

export default Quiz11_01;
