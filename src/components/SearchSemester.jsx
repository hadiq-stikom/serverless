'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchSemester({ nim }) {

    const router = useRouter()

    return (
        <>
            <form className="max-w-sm mr-8">
                <label htmlFor="underline_select" className="sr-only">Cari Semester</label>
                <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-200 font-semibold
                    bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400
                    dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    defaultValue={"Pilih Semester"}
                    onChange={(e) => router.push(`/nilai/${nim}/${e.target.value}`)}
                >
                    <option selected>Pilih Semester</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                </select>

            </form>

        </>
    )
}