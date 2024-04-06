import Image from "next/image"
import Link from "next/link"


const Hotel = ({ e }) => {
    return (
        <div className="border-2 border-red-500 rounded-lg h-80 w-full mb-5 p-5">
            <div className="flex">
                <Image src={e?.banner}
                    priority="true"
                    alt="bannerImg"
                    width={200}
                    height={200}
                    className=" w-96 h-60 mr-3"
                />
                <div className="flex flex-col justify-between">
                    {
                        e ? e.gallery?.map((ele) => (
                            <Image src={ele}
                                key={ele}
                                alt="galleryImg"
                                width={200}
                                height={200}
                                className=" w-24 h-14"
                            />
                        )) : ""
                    }

                </div>
                <div className=" ml-16">
                    <h2 className="font-bold text-3xl line-clamp-1">{e?.name}</h2>
                    <p className=" ml-5text-justify my-5 text-lg">{e?.description}</p>
                    <div className="text-2xl my-5">
                        <span className="font-bold">Facilities: </span>
                        <ul className="flex">
                            {e ? e.facilities.map((ele) => (
                                <li key={ele.name} className="mr-5 mb-3 flex items-center">
                                    <span><Image src={ele.img} alt="alt" width={200} height={200} className=" h-6 w-6 rounded-full mr-1" /></span>
                                    <span className="">{ele.name}</span>
                                </li>
                            )) : ""}
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <button className=" w-60 h-14 rounded-lg bg-blue-400 text-lg hover:bg-blue-500">Price: ₹{e?.price}</button>
                        <Link href={`/hotels/${e._id}`} className="text-xl font-bold text-red-600 ml-10 hover:text-red-900" >See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel