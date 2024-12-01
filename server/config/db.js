const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('데이터베이스 연결 실패:', err.message);
  } else {
    console.log('SQLite 데이터베이스에 연결되었습니다.');
  }
});

// 테이블 초기화
db.serialize(() => {
  // 사용자 테이블 생성
  db.run(
    `
      CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nickname TEXT UNIQUE NOT NULL,
          role TEXT DEFAULT 'user'
      )
    `,
    (err) => {
      if (err) {
        console.error('users 테이블 생성 실패:', err.message);
      } else {
        console.log('users 테이블이 준비되었습니다.');
      }
    }
  );

  // 힌트 테이블 생성
  db.run(
    `
      CREATE TABLE IF NOT EXISTS hints (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          hint TEXT NOT NULL,
          release_time INTEGER NOT NULL
      )
    `,
    (err) => {
      if (err) {
        console.error('hints 테이블 생성 실패:', err.message);
      } else {
        console.log('hints 테이블이 준비되었습니다.');
      }
    }
  );
});

module.exports = db;
