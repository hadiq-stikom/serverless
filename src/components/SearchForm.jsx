'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SearchForm() {
    const router = useRouter();
    const [nim, setNim] = useState("");

    return (
        <div className="flex gap-2">
            <div className="relative">
                <input
                    type="text"
                    className="w-64 px-4 py-2 rounded-xl border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition duration-300 text-gray-700 bg-white"
                    placeholder="Masukkan NIM..."
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                />
            </div>
            <button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transition duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
                onClick={() => router.push(`/nilai/${nim}`)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Cari
            </button>
        </div>
    );
}