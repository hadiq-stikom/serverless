import CardMahasiswa from "@/components/CardMahasiswa";
import SearchSemester from "@/components/SearchSemester";
import supabase from "../../../../../utils/supabase";

export const revalidate = 0

export default async function GetMhsByNimSemester({ params }) {
    const { nim, semester } = params
    const { data: nilai, error } = await supabase.from("nilai").select(`
        nilai,semester,
        matakuliah(kdmk,matakuliah,sks)
    `).eq('nim', nim).eq('semester', semester);
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
        <div className="mt-4 mx-8">
            <div className="flex justify-between bg-slate-300 py-4 ">
                <h1 className="text-xl font-semibold text-slate-700 ml-2" >Nilai Mahasiswa</h1>
                <SearchSemester nim={nim} />
            </div>
            <div className="flex">
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
            <div className=" mt-4 ml-8">
                <h3 className="text-lg font-semibold text-blue-600">Daftar Nilai</h3>
                <div className='flex gap-4 '>
                    {nilai.map((nil, idx) =>
                        <div key={idx} className="mt-2 border border-slate-300 p-2 rounded-md">
                            <h2 className="text-sm font-semibold">{nil.matakuliah.matakuliah}</h2>
                            <li className="text-sm ml-4">Kode MK : {nil.matakuliah.kdmk}</li>
                            <li className="text-sm ml-4">SKS : {nil.matakuliah.sks}</li>
                            <li className="text-sm ml-4">Semester : {nil.semester}</li>
                            <li className="text-sm ml-4">Nilai : {nil.nilai}</li>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}