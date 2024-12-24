// Import library yang diperlukan
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

// Fungsi middleware untuk menangani request
export async function middleware(request) {
  // Membuat response next dengan request yang sama
  const supabaseResponse = NextResponse.next({
    request,
  })

  // Membuat client Supabase untuk server
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        // Fungsi untuk mendapatkan cookie
        get(name) {
          return request.cookies.get(name)?.value
        },
      },
    }
  )

  // Mendapatkan data user yang sedang login
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    // Mendapatkan role/peran user dari database
    const { data: roleData } = await supabase
      .from('roles')
      .select('role')
      .eq('user_id', user.id)
      .single()

    // Memeriksa jika user mencoba mengakses route admin
    if (request.nextUrl.pathname.startsWith('/admin')) {
      // Jika user bukan admin, redirect ke halaman utama
      if (!roleData || roleData.role !== 'admin') {
        return NextResponse.redirect(new URL('/', request.url))
      }
    }
  }

  // Mengembalikan response
  return supabaseResponse
}

// Konfigurasi matcher untuk middleware
// Menentukan path mana yang akan diproses oleh middleware
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    '/admin/:path*'
  ],
}
