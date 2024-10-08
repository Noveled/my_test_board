const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const PORT = 8080;

// JSON 형식 데이터를 처리하기 위해 필요한 미들웨어
app.use(express.json());

app.use(cors()); // http, https 프로토콜을 사용하는 서버 간의 통신을 허용한다.


app.get('/', (req, res) => {
  res.send('Hello World!');
});


// // 데이터베이스에서 사용자 목록 가져오기
// app.get('/users', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM users');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

app.use(require("./routes/postRoutes"));
app.use(require("./routes/getRoutes"));
app.use(require("./routes/deleteRoutes"));
app.use(require("./routes/updateRoutes"));



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
