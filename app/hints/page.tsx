'use client';

import { useState, useEffect } from 'react';
import { FaLightbulb, FaLock, FaUnlock } from 'react-icons/fa';
import Link from 'next/link';

export default function Hints() {
  const [revealedHints, setRevealedHints] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [hints, setHints] = useState([]);

  // Fetch hints from the server
  useEffect(() => {
    const fetchHints = async () => {
      try {
        const response = await fetch('/hints'); // Adjust the endpoint based on your backend route
        if (!response.ok) throw new Error('Failed to fetch hints');
        const data = await response.json();
        setHints(data); // Store hints in state
      } catch (error) {
        console.error('Error fetching hints:', error);
      }
    };

    fetchHints();
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      const newHints = hints.filter((hint) => hint.revealTime <= elapsedTime);
      setRevealedHints(newHints);

      const nextHintTime = hints.find((hint) => hint.revealTime > elapsedTime)?.revealTime;
      if (nextHintTime) {
        setTimeRemaining(Math.ceil((nextHintTime - elapsedTime) / 1000));
      } else {
        setTimeRemaining(0);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hints]); // Re-run timer logic if hints are updated

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-2xl shadow-lg w-full animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700 flex items-center justify-center">
        <FaLightbulb className="mr-2" />
        Treasure Hunt Hints
      </h1>
      {timeRemaining > 0 && (
        <div className="text-center mb-6">
          <p className="text-lg font-semibold">Next hint in:</p>
          <p className="text-3xl font-bold text-indigo-600">{formatTime(timeRemaining)}</p>
        </div>
      )}
      <ul className="space-y-4 mb-6">
        {hints.map((hint) => (
          <li
            key={hint.id}
            className={`bg-indigo-100 p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
              revealedHints.includes(hint) ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <div className="flex items-center">
              {revealedHints.includes(hint) ? (
                <FaUnlock className="text-green-500 mr-2 flex-shrink-0" />
              ) : (
                <FaLock className="text-gray-500 mr-2 flex-shrink-0" />
              )}
              <p className="text-gray-800 text-lg">{hint.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <Link
          href="/code-entry"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 ease-in-out inline-block text-lg font-semibold"
        >
          보물 코드 입력하기
        </Link>
      </div>
    </div>
  );
}
