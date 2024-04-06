"use client"

import Image from 'next/image'
import Block from './Block'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const Header1 = () => {
    const [auth, setAuth] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const key = Cookies.get("user");
        if (key) {
            setAuth(true);
            return;
        }
        setAuth(false);
    }, [auth]);

    function handleLogout() {
        Cookies.remove('user');
        setAuth(false);
        router.push('/login');
    }

    return (
        <div className="flex justify-between border-b-2 border-gray-300 items-center h-[75px] pl-12  ">
            <Link href={'/'}>
                <Image src={'/logo.png'} alt='logo' width={150} height={100} className='w-24 h-24' priority={true} />
            </Link>

            <div className=' border-gray-300 h-full flex'>
                <Block title={'Become a member'} para={'Additional 10% off '} image={'member.svg'} />
                <Block title={'OYO for business'} para={'Trusted by 1000 corporates. '} image={'bag.svg'} />
                <Block title={'List your property'} para={'Start Earning in 30 min '} image={'list.svg'} />
                <Block title={'9876543211'} para={'Call us to book now! '} image={'call.svg'} />
                {
                    auth ? (
                        <Link href={'/login'} className='flex items-center cursor-pointer px-5 hover:bg-slate-300 round' onClick={handleLogout} >
                            <h3 className='font-bold'>Logout</h3>
                        </Link>
                    ) : (
                        <Link href={'/login'} className='flex items-center cursor-pointer px-3 hover:bg-slate-300 round'>
                            <h3 className='font-bold'>Login / Signup</h3>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Header1