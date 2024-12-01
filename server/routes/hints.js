const express = require('express');
const db = require('../config/db');
const router = express.Router();

// 모든 힌트 가져오기 (공개된 것만)
router.get('/', (req, res) => {
    const currentTime = Date.now();

    db.all('SELECT * FROM hints WHERE release_time <= ?', [currentTime], (err, hints) => {
        if (err) {
            return res.status(500).json({ error: '서버 오류' });
        }

        res.json(hints);
    });
});

// 힌트 추가 (관리자만)
router.post('/add', (req, res) => {
    const { hint, release_time } = req.body;

    if (!hint || !release_time) {
        return res.status(400).json({ error: '힌트와 공개 시간을 입력하세요.' });
    }

    db.run('INSERT INTO hints (hint, release_time) VALUES (?, ?)', [hint, release_time], function (err) {
        if (err) {
            return res.status(500).json({ error: '데이터베이스 오류' });
        }

        res.json({ message: '힌트 추가 성공', id: this.lastID });
    });
});

module.exports = router;
