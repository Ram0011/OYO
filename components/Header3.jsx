"use client"

import Link from "next/link"
import { useState } from "react"

const Header3 = () => {

    const [city, setCity] = useState('');

    return (
        <div className="bg-gradient-to-r from-red-600 to-red-400 h-72">
            <div className=" p-5">
                <h2 className="text-4xl text-white font-bold text-center mt-4">Over 1,60,000 hotels and homes across 35 countries</h2>
                <div className="flex justify-center my-8 mx-20">
                    <input type="text" placeholder="Search..." className=" h-16 outline-none px-3 text-lg border-r-2 border-gray-300 col-span-2 rounded-tl-lg rounded-bl-lg w-6/12 " onChange={(e) => { setCity(e.target.value) }} />

                    {/* <input type="date" className=" h-16 outline-none px-3 text-lg border-r-2 border-gray-300 col-span-1 cursor-pointer " />

                    <input type="date" className=" h-16 outline-none px-3 text-lg border-r-2 border-gray-300 col-span-1 cursor-pointer " /> */}

                    <Link href={`/hotels?city=${city}`} className="h-16 px-3 py-2 w-60 bg-green-600 hover:bg-green-700 cursor-pointer text-white text-xl mr-5 rounded-tr-lg rounded-br-lg">
                        <button type="submit" className="w-full h-full flex items-center justify-center" > Search</button>
                    </Link>

                </div>
                <div className="flex mx-20 my-5 font-bold">
                    <button type="submit" className="h-16 px-3 py-2  text-white mr-5 rounded-md" >Continue your search</button>
                    <button type="submit" className="h-16 px-3 py-2 cursor-pointer border-2 text-white mr-5 hover:bg-slate-500 border-white rounded-xl" >Homestay in Indian Hotels</button>
                </div>

            </div>

        </div>
    )
}

export default Header3