import axios from 'axios';
import { useRouter } from 'next/router';
import { Component, useEffect, useState } from 'react';

export const Quiz11_03 = () => {
	const [imgUrl, setImgUrl] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('https://dog.ceo/api/breeds/image/random');
			if (data) setImgUrl(data.message);
		};

		void fetchData();
	}, []);

	return (
		<>
			<img src={imgUrl} alt="" />
		</>
	);
};

export default Quiz11_03;
