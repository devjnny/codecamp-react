// const test: string = '안녕하세요';

// console.log(test);

import { DataSource } from 'typeorm';
import { Board } from './Board.postgres';

const AppDataSource = new DataSource({
	type: 'postgres', // 어떤 type의 데이터베이스에 연결할지
	host: '34.64.124.242', // DB 깔린 컴퓨터 ip주소
	// port: 3000, // DB 깔린 컴퓨터 port
	username: 'postgres',
	password: 'postgres2022',
	database: 'postgres',
	entities: [Board],
	synchronize: true, // 데이터베이스에 Board에 작성한 테이블과 똑같이 만들어달라는 요청 on
	logging: true // 축약된 명령어가 실제 명령어로 변경되는 것을 보고 싶을 때
});

AppDataSource.initialize()
	.then(() => {
		console.log('DB 접속에 성공했습니다!');
	})
	.catch((error) => {
		console.log('DB 접속에 실패했습니다!');
		console.log(error);
	});
