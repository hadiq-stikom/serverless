"use client";
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function CardMahasiswa(props) {
    const { nim, nama, angkatan, prodi, foto } = props;

    return (
        <>
            <div className='p-2 m-2 border border-slate-400 rounded-lg grid justify-items-center text-slate-700'>
                <img className='rounded-full'
                    src={foto} // Use this sample image or upload your own via the Media Explorer
                    width="75" // Transform the image: auto-crop to square aspect_ratio
                    height="75"
                    alt={nama}
                />
                <h1 className="text-xl font-semibold">{nama}</h1>
                <p>NIM      : {nim}</p>
                <p>Angkatan : {angkatan}</p>
                <p>Prodi    : {prodi}</p>
                <Link className='text-purple-800 underline hover:text-blue-800 mt-2'
                    href={`/nilai/${nim}`}>
                    Lihat Nilai
                </Link>



                {/* <div className='bg-blue-600 text-white border 
                            rounded-lg p-2 mt-2'>
                    <Link href={`/mahasiswa/${nim}`}>
                        Lihat Detil
                    </Link>
                </div> */}
            </div>

        </>
    );
}