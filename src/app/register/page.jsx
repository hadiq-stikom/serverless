'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '../../../utils/supabase'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const router = useRouter()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })
      
      if (error) throw error

      setMessage('Registrasi berhasil! Silakan cek email Anda untuk konfirmasi.')
      setTimeout(() => {
        router.push('/login')
      }, 3000)
      
    } catch (error) {
      setError(error.message)
    }
  }

  const handleResendConfirmation = async () => {
    try {
      const { data, error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      })

      if (error) {
        setError(error.message)
        return
      }

      setMessage('Email konfirmasi telah dikirim ulang. Silakan cek kotak masuk email Anda.')
    } catch (error) {
      setError('Terjadi kesalahan saat mengirim ulang email konfirmasi')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-center text-3xl font-bold text-purple-800">Register</h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded">{error}</div>
        )}
        {message && (
          <div className="bg-green-100 text-green-700 p-3 rounded">{message}</div>
        )}
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-md hover:from-purple-600 hover:to-pink-600"
          >
            Register
          </button>
        </form>
        {error && error.includes('konfirmasi') && (
          <button
            onClick={handleResendConfirmation}
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Kirim Ulang Email Konfirmasi
          </button>
        )}
      </div>
    </div>
  )
}