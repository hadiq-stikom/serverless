// "use client";
// import { useState, useEffect } from "react";
// import { CldUploadWidget } from "next-cloudinary";
// import supabase from "../../../utils/supabase";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function UpdateMahasiswa() {
//     const [nim, setNim] = useState("");
//     const [nama, setNama] = useState("");
//     const [angkatan, setAngkatan] = useState("");
//     const [prodi, setProdi] = useState("");
//     const [foto, setFoto] = useState("");
//     const router = useRouter();
//     const searchParams = useSearchParams();

//     useEffect(() => {
//         const getMahasiswa = async () => {
//             const nim = searchParams.get("nim");
//             if (nim) {
//                 const { data, error } = await supabase
//                     .from("mahasiswa")
//                     .select("*")
//                     .eq("nim", nim)
//                     .single();

//                 if (error) {
//                     console.log(error);
//                 }

//                 if (data) {
//                     setNim(data.nim);
//                     setNama(data.nama);
//                     setAngkatan(data.angkatan);
//                     setProdi(data.prodi);
//                     setFoto(data.foto);
//                 }
//             }
//         };

//         getMahasiswa();
//     }, [searchParams]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const { data, error } = await supabase
//                 .from("mahasiswa")
//                 .update({
//                     nama,
//                     angkatan,
//                     prodi,
//                     foto
//                 })
//                 .eq("nim", nim);

//             if (error) throw error;
            
//             router.push("/");
//             router.refresh();
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto mt-10">
//             <h1 className="text-2xl font-bold text-center mb-6">Update Data Mahasiswa</h1>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">NIM</label>
//                     <input
//                         type="text"
//                         value={nim}
//                         disabled
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-100"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Nama</label>
//                     <input
//                         type="text"
//                         value={nama}
//                         onChange={(e) => setNama(e.target.value)}
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Angkatan</label>
//                     <input
//                         type="text"
//                         value={angkatan}
//                         onChange={(e) => setAngkatan(e.target.value)}
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Program Studi</label>
//                     <input
//                         type="text"
//                         value={prodi}
//                         onChange={(e) => setProdi(e.target.value)}
//                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Foto</label>
//                     <CldUploadWidget
//                         uploadPreset="cq8yto09"
//                         onSuccess={(result) => {
//                             setFoto(result.info.public_id);
//                         }}
//                     >
//                         {({ open }) => {
//                             return (
//                                 <button
//                                     onClick={(e) => {
//                                         e.preventDefault();
//                                         open();
//                                     }}
//                                     className="mt-1 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//                                 >
//                                     Upload Foto Baru
//                                 </button>
//                             );
//                         }}
//                     </CldUploadWidget>
//                     {foto && (
//                         <p className="mt-2 text-sm text-gray-500">
//                             Foto berhasil diupload
//                         </p>
//                     )}
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//                 >
//                     Update
//                 </button>
//             </form>
//             <p>NIM: {nim}</p>
//         </div>
//     );
// }
