'use client'
import { signout } from '@/app/login/actions'

export default function SignoutButton() {
  return (
    <form>
      <button
        formAction={signout}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl 
                hover:from-purple-600 hover:to-pink-600 transition duration-300 font-medium 
                  shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        Sign Out
      </button>
    </form>
  )
} 