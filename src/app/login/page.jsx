import { login, signup } from './actions'


export default async function LoginPage({ searchParams }) {
  const message = await searchParams.message
  console.log(message);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-center text-3xl font-bold text-purple-800">Login</h2>
        
        {searchParams?.message && (
          <div className="bg-blue-100 text-blue-700 p-4 rounded-md text-center">
            {searchParams.message}
          </div>
        )}

        <form className="space-y-6" action={login}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="flex gap-4">
            <button 
              type="submit"
              className="flex-1 bg-gradient-to-r from-green-500 to-pink-500 text-white py-2 px-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Log in
            </button>
            <button 
              formAction={signup}
              className="flex-1 bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 px-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}



// 'use client'
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import supabase from '../../../utils/supabase'

// export default function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState(null)
//   const router = useRouter()

//   const handleLogin = async (e) => {
//     e.preventDefault()
//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       })
//       if (error) throw error
//       console.log(data.session);
      
//       router.push('/') // Redirect ke halaman utama setelah login
//       router.refresh()
//     } catch (error) {
//       setError(error.message)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-md">
//         <h2 className="text-center text-3xl font-bold text-purple-800">Login</h2>
//         {error && (
//           <div className="bg-red-100 text-red-700 p-3 rounded">{error}</div>
//         )}
//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-md hover:from-purple-600 hover:to-pink-600"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }