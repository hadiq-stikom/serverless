import { NextRequest } from 'next/server'
import { updateSession } from './utils/supabase/middleware'

export async function middleware(request) {
  const supabaseResponse = await updateSession(request)
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    // Get user role
    const { data: roleData } = await supabase
      .from('roles')
      .select('role')
      .eq('user_id', user.id)
      .single()

      console.log('user', user);
      console.log('roleData', roleData);
      

    // Check if trying to access admin routes
    if (request.nextUrl.pathname.startsWith('/admin')) {
      if (!roleData || roleData.role !== 'admin') {
        // Redirect non-admin users
        return NextResponse.redirect(new URL('/', request.url))
      }
    }
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    '/admin/:path*'
  ],
}
// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
// import { NextResponse } from 'next/server'

// export async function middleware(req) {
//   const res = NextResponse.next()
//   const supabase = createMiddlewareClient({ req, res })

//   const {
//     data: { session },
//   } = await supabase.auth.getSession()

//   // Jika user tidak login dan mencoba mengakses halaman yang dilindungi
//   if (!session && req.nextUrl.pathname !== '/login' && req.nextUrl.pathname !== '/register') {
//     return NextResponse.redirect(new URL('/login', req.url))
//   }

//   // Jika user sudah login dan mencoba mengakses halaman login/register
//   if (session && (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/register')) {
//     return NextResponse.redirect(new URL('/', req.url))
//   }

//   return res
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// } 