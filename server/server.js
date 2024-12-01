const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const hintRoutes = require('./routes/hints');

const app = express(); // app 선언 위치 수정
const PORT = 5000;

// Middleware 설정
app.use(cors()); // CORS 설정
app.use(bodyParser.json()); // JSON 파싱

// 라우터 등록
app.use('/auth', authRoutes);
app.use('/hints', hintRoutes);

// 기본 라우트
app.get('/', (req, res) => {
    res.send('Node.js API Server is running!');
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
