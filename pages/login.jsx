"use client"
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";


const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const router = useRouter();

    const handleSignUp = async () => {
        const res = await axios.post(`/api/user/register`, { name, email, password });
        if (res?.data) {
            Cookies.set('user', res.data.token, { expires: 7 });
            alert(res.data.msg);
            router.back();
        }
    }

    const handleToggle = () => {
        setLogin(!login);
    }

    const handleLogin = async () => {
        const res = await axios.post(`/api/user/login`, { email, password });
        if (res.data) {
            Cookies.set('user', res.data.token, { expires: 7 });
            alert(res.data.msg);
            router.back();
        }
    }

    return (
        <div>
            <Head>
                <title>OYO - Login</title>
            </Head>
            <div className="flex h-screen items-center justify-center relative bg-login-background bg-cover opacity-95">
                <div className="absolute w-full top-10 px-20 flex items-center">
                    <h2 className=" text-5xl font-extrabold mr-5 text-gray-900">OYO</h2>
                    <p className="font-bold text-2xl text-white">Hotels and homes across 800 cities, 24+ countries</p>
                </div>
                <div className="flex justify-center items-center w-9/12">

                    <div>
                        <p className="font-bold text-5xl text-justify text-white">There’s a smarter way to OYO around</p>
                        <p className="text-xl mt-5 text-justify text-white">Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>
                    </div>

                    <div className="w-10/12 ml-20  bg-slate-50">
                        <p className="h-8 px-10 flex items-center text-white text-lg font-bold bg-gradient-to-r from-red-400 to-red-600">Sign Up & Get ₹500 OYO Money</p>

                        <div className="px-10">
                            <h3 className="text-4xl font-bold my-5">Login / Signup</h3>
                            <p className="font-bold text-lg mb-1">Please enter your details to continue</p>

                            {
                                login ? "" : <input type="text" placeholder="Enter Your Name..." className="outline-none border my-3 border-black px-3 py-1 w-96 h-10" onChange={(e) => setName(e.target.value)} />
                            }

                            <input type="email" placeholder="Enter Your Email..." className="outline-none border my-3 border-black px-3 py-1 w-96 h-10" onChange={(e) => setEmail(e.target.value)} />

                            <input type="password" placeholder="Enter Your Password..." className="outline-none border my-3 border-black px-3 py-1 w-96 h-10" onChange={(e) => setPassword(e.target.value)} />

                            <button type="submit" className="w-72 h-14 text-lg font-bold bg-red-500 cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg" onClick={login ? handleLogin : handleSignUp}>
                                {login ? "Login" : "SignUp"}
                            </button>

                            <p className="my-2 text-lg">
                                <span>{login ? "Dont have an account" : "Already have an account?"}</span>
                                <span className="ml-1 text-red-500 hover:text-red-800 cursor-pointer" onClick={handleToggle} >{login ? "Signup" : "Login"}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login