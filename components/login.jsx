'use client'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaCheck } from 'react-icons/fa'
import Link from 'next/link';
function Login({ setLogin }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const emailId = document.getElementById('email')
        const emailSpanId = document.getElementById('emailSpan')
        const passwordId = document.getElementById('password')
        const passwordSpanId = document.getElementById('telSpan')
        emailId.addEventListener("focusin", () => {
            emailSpanId.style.cssText = ' transform:translateX(10px) translateY(-11px); font-size:0.65em; padding:0 10px; opacity:100; border-left:1px solid #0EA5E9 ; border-right:1px solid #0EA5E9 ; border-radius:2px; font-style:italic ; background:#0EA5E9 ; color:white;'
        })
        emailId.addEventListener("focusout", () => {
            if (emailId.value.length == 0) {
                emailSpanId.style.cssText = 'transform:transleteX(0px) translateY(0px); border:none '
            }
        })
        passwordId.addEventListener("focusin", () => {
            passwordSpanId.style.cssText = ' transform:translateX(10px) translateY(-11px); font-size:0.65em; padding:0 10px; background:#0EA5E9 ; color:white; opacity:100; border-left:1px solid #0EA5E9 ; border-right:1px solid #0EA5E9 ; border-radius:2px; font-style:italic ;'
        })
        passwordId.addEventListener("focusout", () => {
            if (passwordId.value.length == 0) {
                passwordSpanId.style.cssText = 'transform:transleteX(0px) translateY(0px); border:none '
            }
        })

    }, [])


    return (
        <div className='flex flex-col w-full h-full'>
            <AiOutlineClose className='text-4xl m-4 hover:scale-110 text-red self-end transition-all cursor-pointer ' onClick={() => setLogin(false)} />
            <div className="flex flex-col justify-center items-center h-full">
                <FaCheck className='text-navBlue text-6xl ' />
                <form className="flex flex-col items-center justify-center w-full max-w-md rounded py-10 gap-6">
                    <div className='relative w-[250px] h-full'>
                        <input
                            className="shadow-lg appearance-none border-4 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight  focus:outline-none focus:shadow-outline p-4 border-greyWhite outline-none "
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className='absolute p-[12px] top-0 left-0 pointer-events-none text-[12px] text-black uppercase transition-all duration-300 opacity-30' id='emailSpan'>Email</span>
                    </div>
                    <div className='relative w-[250px] h-full mb-4'>
                        <input
                            className="shadow-lg appearance-none border-4 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  p-4  border-greyWhite  outline-none "
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className='absolute p-[12px] top-0 left-0 pointer-events-none text-[12px] text-black uppercase transition-all duration-300 opacity-30 ' id='telSpan'>Password</span>
                    </div>
                    <button className="bg-navBlue hover:scale-105 transition-all text-white font-bold py-2 w-40 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Login
                    </button>
                    <button className="bg-navBlue hover:scale-105 transition-all text-white font-bold py-2 w-40 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Demo App
                    </button>
                    <span className='text-grey font-bold'>Not a member yet ?
                        <span className='text-navBlue cursor-pointer opacity-70 hover:opacity-100'> Register</span>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Login