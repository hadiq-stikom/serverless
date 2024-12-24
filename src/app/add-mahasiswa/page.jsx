"use client";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import supabase from "../../../utils/supabase";
import { useRouter } from "next/navigation";

export default function AddMahasiswa() {
    const [nim, setNim] = useState("");
    const [nama, setNama] = useState("");
    const [angkatan, setAngkatan] = useState("");
    const [prodi, setProdi] = useState("");
    const [foto, setFoto] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase
                .from("mahasiswa")
                .insert([
                    {
                        nim,
                        nama,
                        angkatan,
                        prodi,
                        foto
                    }
                ]);

            if (error) throw error;
            
            router.push("/");
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">✨ Tambah Data Mahasiswa</h1>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-xl border border-purple-100">
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-purple-800">NIM</label>
                    <input
                        type="text"
                        value={nim}
                        onChange={(e) => setNim(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition duration-300 text-gray-700 bg-white"
                        required
                        placeholder="Masukkan NIM"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-purple-800">Nama</label>
                    <input
                        type="text"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition duration-300 text-gray-700 bg-white"
                        required
                        placeholder="Masukkan nama lengkap"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-purple-800">Angkatan</label>
                    <input
                        type="text"
                        value={angkatan}
                        onChange={(e) => setAngkatan(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition duration-300 text-gray-700 bg-white"
                        required
                        placeholder="Masukkan tahun angkatan"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-purple-800">Program Studi</label>
                    <input
                        type="text"
                        value={prodi}
                        onChange={(e) => setProdi(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition duration-300 text-gray-700 bg-white"
                        required
                        placeholder="Masukkan program studi"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-purple-800 mb-2">Foto</label>
                    <CldUploadWidget
                        uploadPreset="cq8yto09"
                        onSuccess={(result) => {
                            setFoto(result.info.public_id);
                        }}
                    >
                        {({ open }) => {
                            return (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        open();
                                    }}
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl hover:from-purple-600 
                                            hover:to-pink-600 transition duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                >
                                    📸 Upload Foto
                                </button>
                            );
                        }}
                    </CldUploadWidget>
                    {foto && (
                        <p className="mt-2 text-sm text-purple-600 font-medium flex items-center bg-purple-50 p-2 rounded-lg">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Foto berhasil diupload ✨
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white py-3 px-6 rounded-xl hover:from-green-500 
                            hover:to-emerald-600 transition duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mt-6"
                >
                    💾 Simpan Data
                </button>
            </form>
        </div>
    );
}
