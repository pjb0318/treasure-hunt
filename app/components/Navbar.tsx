import Link from 'next/link'
import { FaHome, FaLightbulb, FaKey, FaTrophy } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 fixed top-0 left-0 right-0 z-10">
      <ul className="flex justify-around items-center">
        <li>
          <Link href="/" className="flex flex-col items-center">
            <FaHome className="text-xl mb-1" />
            <span className="text-xs">홈</span>
          </Link>
        </li>
        <li>
          <Link href="/hints" className="flex flex-col items-center">
            <FaLightbulb className="text-xl mb-1" />
            <span className="text-xs">힌트</span>
          </Link>
        </li>
        <li>
          <Link href="/code-entry" className="flex flex-col items-center">
            <FaKey className="text-xl mb-1" />
            <span className="text-xs">코드입력</span>
          </Link>
        </li>
        <li>
          <Link href="/leaderboard" className="flex flex-col items-center">
            <FaTrophy className="text-xl mb-1" />
            <span className="text-xs">리더보드</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

