'use client'

import { useState } from 'react'
import { FaKey, FaCheck, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const CORRECT_CODE = 'TREASURE123' // 실제 환경에서는 서버에서 검증해야 합니다

export default function CodeEntry() {
  const [code, setCode] = useState('')
  const [message, setMessage] = useState<{ text: string; isSuccess: boolean } | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (code === CORRECT_CODE) {
      setMessage({ text: '정답입니다! 축하 페이지로 이동합니다...', isSuccess: true })
      setTimeout(() => {
        router.push('/congratulations')
      }, 1500)
    } else {
      setMessage({ text: '잘못된 코드입니다. 다시 시도해주세요.', isSuccess: false })
    }
  }

  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-2xl shadow-lg w-full animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700 flex items-center justify-center">
        <FaKey className="mr-2" />
        보물 코드 입력
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="보물에 적힌 코드를 입력하세요"
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out text-lg"
        />
        <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 ease-in-out flex items-center justify-center text-lg font-semibold">
          <FaCheck className="mr-2" />
          코드 확인
        </button>
      </form>
      {message && (
        <div className={`mb-6 p-4 rounded-lg ${message.isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} flex items-center text-lg`}>
          {message.isSuccess ? <FaCheck className="mr-2 flex-shrink-0" /> : <FaTimes className="mr-2 flex-shrink-0" />}
          {message.text}
        </div>
      )}
      <div className="text-center">
        <Link href="/hints" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 ease-in-out text-lg">
          힌트로 돌아가기
        </Link>
      </div>
    </div>
  )
}

