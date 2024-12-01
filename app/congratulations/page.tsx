'use client';

import { useState, useEffect } from 'react';
import { FaTrophy, FaPoll, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function Congratulations() {
  const [nickname, setNickname] = useState<string>('');

  const handleSubmitNickname = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(`닉네임 저장 성공! 역할: ${data.role}`);
      } else {
        alert(`오류: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      alert('서버와 연결할 수 없습니다.');
    }
  };
  

  // 컴포넌트가 마운트될 때 축하 효과 표시
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full animate-fadeIn">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700 flex items-center justify-center">
        <FaTrophy className="mr-2 text-yellow-500" />
        축하합니다!
      </h1>
      <div className="text-center mb-8">
        <p className="text-2xl font-semibold mb-2">보물을 찾으셨습니다!</p>
        <p className="text-xl">당신은 진정한 보물 사냥꾼입니다!</p>
      </div>
      <form onSubmit={handleSubmitNickname} className="mb-6">
        <div className="flex items-center mb-4">
          <FaUser className="text-gray-500 mr-2" />
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          />
        </div>
        <button
          type="submit"
          className="flex w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors items-center justify-center text-lg font-semibold"
        >
          <FaUser className="mr-2" />
          닉네임 저장하기
        </button>
      </form>
      <Link
        href="https://forms.gle/your-google-form-url"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors items-center justify-center text-lg font-semibold mb-4"
      >
        <FaPoll className="mr-2" />
        설문조사 참여하기
      </Link>
      <Link
        href="/"
        className="flex w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors items-center justify-center text-lg font-semibold"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
