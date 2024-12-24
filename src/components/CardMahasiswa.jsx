"use client";
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function CardMahasiswa(props) {
    const { nim, nama, angkatan, prodi, foto } = props;

    return (
        <>
            <div className='p-4 m-3 bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 rounded-xl grid justify-items-center text-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                {foto.charAt(0) === '/' ? (
                    <div className="relative mb-3">
                        <img className='rounded-full w-[90px] h-[90px] object-cover border-4 border-white shadow-md'
                            src={foto}
                            alt={nama}
                        />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                            {angkatan}
                        </div>
                    </div>
                ) : (
                    <div className="relative mb-3">
                        <CldImage className='rounded-full w-[90px] h-[90px] object-cover border-4 border-white shadow-md'
                            src={foto}
                            width="90"
                            height="90"
                            alt={nama}
                            crop={{
                                type: 'auto',
                                source: true
                            }}
                        />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                            {angkatan}
                        </div>
                    </div>
                )}
               
                <h1 className="text-xl font-bold text-purple-800 mb-1">{nama}</h1>
                <p className="text-sm font-medium bg-white px-4 py-1 rounded-full shadow-sm mb-1">{nim}</p>
                <p className="text-sm font-medium text-pink-600 mb-3">{prodi}</p>
                <Link className='bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2'
                    href={`/nilai/${nim}`}>
                    <span>Lihat Nilai</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

        </>
    );
}