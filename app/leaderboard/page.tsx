'use client'

import { useState, useEffect } from 'react'
import { FaTrophy } from 'react-icons/fa'

interface Participant {
  id: number
  nickname: string
  time: string
}

export default function Leaderboard() {
  const [participants, setParticipants] = useState<Participant[]>([])

  useEffect(() => {
    // TODO: Implement real-time leaderboard updates
    const mockParticipants: Participant[] = [
      { id: 1, nickname: 'TreasureHunter1', time: '10:15 AM' },
      { id: 2, nickname: 'AdventureSeeker', time: '10:30 AM' },
      { id: 3, nickname: 'PuzzleMaster', time: '10:45 AM' },
    ]
    setParticipants(mockParticipants)
  }, [])

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center animate-fadeIn">
      <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700 flex items-center justify-center">
          <FaTrophy className="mr-2" />
          Treasure Hunt Leaderboard
        </h1>
        <ul className="space-y-2">
          {participants.map((participant, index) => (
            <li key={participant.id} className="bg-indigo-100 p-4 rounded-lg shadow-md flex justify-between items-center transition-all duration-300 ease-in-out hover:shadow-lg">
              <span className="font-semibold">
                {index + 1}. {participant.nickname}
              </span>
              <span className="text-gray-600">{participant.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

