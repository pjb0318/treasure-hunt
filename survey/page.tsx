'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaClipboardList } from 'react-icons/fa'

export default function Survey() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    feedback: '',
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement survey submission
    console.log('Survey submitted:', formData)
    router.push('/leaderboard')
  }

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center animate-fadeIn">
      <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700 flex items-center justify-center">
          <FaClipboardList className="mr-2" />
          Treasure Hunt Survey
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out"
            />
          </div>
          <div>
            <label htmlFor="experience" className="block mb-1 text-gray-700">How was your experience?</label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out"
            >
              <option value="">Select an option</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="poor">Poor</option>
            </select>
          </div>
          <div>
            <label htmlFor="feedback" className="block mb-1 text-gray-700">Additional feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out"
              rows={4}
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 ease-in-out">
            Submit Survey
          </button>
        </form>
      </div>
    </div>
  )
}

