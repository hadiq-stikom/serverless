// Fungsi untuk memeriksa peran pengguna dari database
// Parameter: 
// - supabase: instance koneksi ke database Supabase
// - userId: ID pengguna yang akan dicek perannya
export async function checkUserRole(supabase, userId) {
  // Mengambil data peran dari tabel 'roles' berdasarkan user_id
  const { data, error } = await supabase
    .from('roles')
    .select('role')
    .eq('user_id', userId)
    .single()

  // Jika terjadi error, kembalikan null
  if (error) return null
  // Mengembalikan nilai peran pengguna
  return data.role
}