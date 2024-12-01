import Link from 'next/link'
import { FaMapMarkedAlt, FaPlay } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-2xl shadow-lg w-full animate-fadeIn">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-indigo-700">
        <FaMapMarkedAlt className="inline-block mr-2 mb-1" />
        SeoulTech Treasure Hunt
      </h1>
      <p className="text-center mb-8 text-gray-600 text-lg">
        보물을 찾는 즐거운 경험을 해보세요!
      </p>
      <div className="space-y-4">
        <Link href="/hints" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 ease-in-out flex items-center justify-center text-xl font-semibold">
          <FaPlay className="mr-2" />
          시작하기
        </Link>
      </div>
    </div>
  )
}

