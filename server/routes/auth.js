const express = require('express');
const db = require('../config/db'); // 데이터베이스 설정
const router = express.Router();

// 닉네임 중복 확인 및 저장
router.post('/login', (req, res) => {
    const { nickname } = req.body;

    if (!nickname) {
        return res.status(400).json({ error: '닉네임을 입력하세요.' });
    }

    // 닉네임 중복 확인
    db.get('SELECT * FROM users WHERE nickname = ?', [nickname], (err, user) => {
        if (err) {
            return res.status(500).json({ error: '서버 오류' });
        }

        if (user) {
            // 닉네임 중복
            return res.json({ message: '로그인 성공', role: user.role });
        }

        // 새 닉네임 저장
        db.run('INSERT INTO users (nickname, role) VALUES (?, ?)', [nickname, 'user'], function (err) {
            if (err) {
                return res.status(500).json({ error: '데이터베이스 오류' });
            }

            return res.json({ message: '닉네임 등록 성공', role: 'user' });
        });
    });
});

module.exports = router;
