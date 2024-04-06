"use client"
import Head from "next/head";
import Image from "next/image"
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";


const SingleHotel = ({ hotel }) => {

    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const cookie = Cookies.get('user');
        if (cookie) {
            setAuth(true);
            return;
        }
        setAuth(false);
    }, []);

    return (
        <>
            <Head>
                <title>{hotel?.name}</title>
            </Head>
            <div className="w-7/12 mx-auto my-10">
                <Image src={hotel?.banner}
                    priority="true"
                    alt="hotelImg"
                    width={200}
                    height={200}
                    className=" w-full h-large-box my-3"
                />

                <div className="">
                    <h3 className="text-3xl font-bold">{hotel?.name}</h3>
                    <p className="text-xl my-5 text-justify">{hotel?.description}</p>
                    <button className=" w-60 h-14 rounded-lg bg-blue-400 text-lg">Price: ₹{hotel?.price}</button>
                    <p className=" text-3xl font-bold my-5">Facilities:</p>
                    <ul className="flex text-xl gap-2 justify-start">
                        {
                            hotel ? hotel.facilities.map((e) => (
                                <li key={e.name} className="mr-5 mb-3 flex items-center">
                                    <span><Image src={e.img} alt="img" width={200} height={200} className=" h-6 w-6 rounded-full mr-1" /></span>
                                    <span className="">{e.name}</span>
                                </li>
                            )) : ""
                        }
                    </ul>
                    {
                        auth ? (
                            <Link href={`/payment/${hotel?._id}`}>
                                <button className=" w-60 h-14 rounded-lg bg-red-400 text-lg hover:bg-red-500 my-5">Book Now</button>
                            </Link>
                        ) : (
                            <button className=" text-2xl">
                                Please <Link href={'/login'} className="text-blue-500 hover:text-blue-700">Login</Link> to get offer
                            </button>
                        )

                    }

                </div>

            </div>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
    const data = await res.json();
    return {
        props: {
            hotel: data.hotel,
        }
    }
}

export default SingleHotel