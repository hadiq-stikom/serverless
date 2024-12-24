import { redirect } from 'next/navigation';
import CardMahasiswa from "@/components/CardMahasiswa";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";
export const revalidate = 0;

import { createClient } from '../../utils/supabase/server'

export default async function Home() {
  const supabase = await createClient()

  const { data, error: authError } = await supabase.auth.getUser()
  console.log(data);
  
  if (authError || !data?.user) {
    redirect('/login')
  }

  const { data: mahasiswa, error: fetchError } = await supabase.from("mahasiswa").select('').order("id", { ascending: true });
  console.log(mahasiswa);

  if (fetchError) {
    console.log(fetchError);
  }

  return (
    <div className="container mx-auto px-4">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-4 gap-4 bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md border-b-2 border-purple-200">
        <h1 className="text-2xl font-bold text-purple-800">
          ✨ Daftar Mahasiswa
        </h1>
        <Link href="/add-mahasiswa">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl hover:from-purple-600 
          hover:to-pink-600 transition duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            📸 Tambah Data
          </button>
        </Link>
        <SearchForm />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-6">
        {mahasiswa.map((mhs, idx) => (
          <CardMahasiswa
            key={idx}
            nim={mhs.nim}
            nama={mhs.nama}
            angkatan={mhs.angkatan}
            prodi={mhs.prodi}
            foto={mhs.foto}
          />
        ))}
      </div>
    </div>
  );
}