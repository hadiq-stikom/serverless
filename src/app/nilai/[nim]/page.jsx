
import CardMahasiswa from "@/components/CardMahasiswa";
import SearchSemester from "@/components/SearchSemester";
import { redirect } from 'next/navigation';
import { createClient } from '../../../../utils/supabase/server'

export const revalidate = 0

export default async function NilaiByNim({ params }) {
    const supabase = await createClient()

    const { data, error: authError } = await supabase.auth.getUser()
    console.log(data);

    if (authError || !data?.user) {
        redirect('/login')
    }

    const { nim } = params
    const { data: nilai, error } = await supabase.from("nilai").select(`
        nilai,semester,
        matakuliah(kdmk,matakuliah,sks)
    `).eq('nim', nim);
    if (error) {
        console.log(error);
    }
    console.log(nilai);

    const { data: mahasiswa, err } = await supabase.from("mahasiswa").select(`
       *
    `).eq('nim', nim);
    if (err) {
        console.log(err);
    }

    console.log(mahasiswa);


    return (
        <div>
            <div className="flex justify-between bg-gradient-to-r from-blue-300 to-blue-500 p-4 shadow-md">
                <h1 className="text-xl font-semibold text-blue-800 ml-2" >Nilai Mahasiswa</h1>
                <SearchSemester nim={nim} />
            </div>
            <div className="flex justify-center">
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
            <div className="mt-4 ml-8 mr-8">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Daftar Nilai</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">Mata Kuliah</th>
                                <th className="py-3 px-4 text-left">Kode MK</th>
                                <th className="py-3 px-4 text-left">SKS</th>
                                <th className="py-3 px-4 text-left">Semester</th>
                                <th className="py-3 px-4 text-left">Nilai</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {nilai.map((nil, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="py-2 px-4">{nil.matakuliah.matakuliah}</td>
                                    <td className="py-2 px-4">{nil.matakuliah.kdmk}</td>
                                    <td className="py-2 px-4">{nil.matakuliah.sks}</td>
                                    <td className="py-2 px-4">{nil.semester}</td>
                                    <td className="py-2 px-4 font-semibold">{nil.nilai}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}