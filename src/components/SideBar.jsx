'use client'
import { useRouter } from 'next/navigation'
import LogoutButton from './LogoutButton'

export default function Sidebar() {
  const router = useRouter()

  return (
    <div className="fixed left-0 top-0 h-screen w-36 bg-gradient-to-b from-purple-100 to-pink-100 p-6 shadow-xl">
      <div className="flex flex-col items-center space-y-4 h-full">
        <h2 className="text-2xl font-bold text-purple-800 mb-6">Menu</h2>
        
        <button
          onClick={() => router.push('/')}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </button>

       

        <div className="mt-auto">
          <LogoutButton />
        </div>
      </div>
    </div>
  )
}
