const { Pool } = require('pg'); // postgres 모듈 불러오기
require('dotenv').config(); // .env 파일 사용 설정

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

module.exports = pool; // {} 로 감쌀 경우 pool 변수를 적어서 사용해야 한다.