import { FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 left-0 right-0">
      <p className="flex items-center justify-center">
        Made with <FaHeart className="text-red-500 mx-1" /> by Our School
      </p>
    </footer>
  )
}

