"use client";
import { useState } from "react";
import supabase from "../../../../utils/supabase";
import { useRouter } from "next/navigation";

export default function AddMahasiswaLokal() {
    const [nim, setNim] = useState("");
    const [nama, setNama] = useState("");
    const [angkatan, setAngkatan] = useState("");
    const [prodi, setProdi] = useState("");
    const [foto, setFoto] = useState(null);
    const router = useRouter();

    const handleFileChange = (e) => {
        setFoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (foto) {
                // Upload file using API route
                const formData = new FormData();
                formData.append('file', foto);

                const uploadResponse = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                });

                if (!uploadResponse.ok) {
                    throw new Error('Failed to upload file');
                }

                const uploadResult = await uploadResponse.json();

                // Save data to Supabase
                const { data, error } = await supabase
                    .from("mahasiswa")
                    .insert([
                        {
                            nim,
                            nama,
                            angkatan,
                            prodi,
                            foto: uploadResult.filename // Use the path returned from API
                        }
                    ]);

                if (error) throw error;
                
                router.push("/");
                router.refresh();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center mb-6">Tambah Data Mahasiswa (Local Storage)</h1>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-800">NIM</label>
                    <input
                        type="text"
                        value={nim}
                        onChange={(e) => setNim(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 text-gray-700"
                        required
                        placeholder="Masukkan NIM"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-800">Nama</label>
                    <input
                        type="text"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 text-gray-700"
                        required
                        placeholder="Masukkan nama lengkap"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-800">Angkatan</label>
                    <input
                        type="text"
                        value={angkatan}
                        onChange={(e) => setAngkatan(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 text-gray-700"
                        required
                        placeholder="Masukkan tahun angkatan"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-800">Program Studi</label>
                    <input
                        type="text"
                        value={prodi}
                        onChange={(e) => setProdi(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 text-gray-700"
                        required
                        placeholder="Masukkan program studi"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-800">Foto</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 text-gray-700"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition duration-200 font-medium shadow-sm mt-4"
                >
                    Simpan Data
                </button>
            </form>
        </div>
    );
}
