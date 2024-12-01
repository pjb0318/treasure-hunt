import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata = {
  title: 'School Treasure Hunt',
  description: 'Join the exciting school treasure hunt event!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-br from-purple-100 to-indigo-200 text-gray-800 min-h-screen`}>
        <Navbar />
        <main className="max-w-md mx-auto p-4 min-h-screen flex flex-col justify-center pt-16 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

