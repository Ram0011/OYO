import Image from "next/image";

const Header5 = () => {
    return (
        <div className="grid bg-[#f3f5f7] h-[450px] grid-cols-12">
            <Image src={'/Network.avif'} alt="banner1" width={200} height={200} className="h-[360px] w-full ml-6 my-10 col-span-6" priority={true} />
            <div className=" col-span-5 ml-20 mt-[100px]">
                <h1 className="font-bold text-3xl text-gray-800">There&lsquo;s an OYO around. Always.</h1>
                <h3 className="text-gray-600 mt-8 text-lg">More Destinations. More Ease. More Affordable.</h3>
                <div className=" mt-10 flex">
                    <div className="grid mr-6">
                        <span className="font-semibold text-4xl">35+</span>
                        <span className="text-gray-600  font-normal">Countries</span>
                    </div>
                    <div className="grid border-l-2 border-gray-400">
                        <span className="font-semibold text-4xl ml-4">174,000+</span>
                        <span className="text-gray-600  font-normal ml-4">Hotels & Homes</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header5