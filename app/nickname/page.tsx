'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaUser } from 'react-icons/fa'

export default function Nickname() {
  const [nickname, setNickname] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement nickname submission to leaderboard
    router.push('/survey')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700 flex items-center justify-center">
          <FaUser className="mr-2" />
          Enter Your Nickname
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Enter nickname"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out"
          />
          <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 ease-in-out">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

