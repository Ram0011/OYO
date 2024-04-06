"use client"

import Image from "next/image"

const Header4 = () => {
    return (
        <div className="flex justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5 py-1">
            <div className="flex items-center">
                <Image src={'/fire.jpg'} alt="fire" width={200} height={200} className="w-20 h-20 rounded-full mr-5" />
                <div className=" text-lg">
                    <p className=" font-bold">Get access to exclusive deals</p>
                    <p className=" text-slate-500">Only the best deal reach your inbox</p>
                </div>
            </div>
            <div className="flex items-center">
                <input type="email" className="px-6 py-3 mr-5 outline-none border border-gray-300 rounded-lg" placeholder="example@gmail.com" />
                <button type="submit" className="w-28 h-10 bg-red-500 text-xl text-white cursor-pointer rounded-xl hover:bg-red-400">Notify</button>
            </div>

        </div>
    )
}

export default Header4