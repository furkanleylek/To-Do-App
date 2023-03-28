'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import LoginModal from '@/components/modals/loginModal'
import { FaCheck } from 'react-icons/fa'

function Landing() {

    const [login, setLogin] = useState(false)

    return (
        <div className='flex flex-col justify-center mt-8 relative w-[85%] lg:w-[80%] m-auto h-full'>
            <FaCheck className='text-navBlue text-[50px]' />
            <div className='flex flex-col justify-center w-full m-auto h-full  border-navBlue'>
                <div className='flex items-center justify-between '>
                    <div className='flex flex-col items-start justify-center gap-6'>
                        <h1 className='text-navBlue font-extrabold text-2xl italic'>Task Tracking App</h1>
                        <p className=' w-[80%] lg:w-1/2'>
                            Lorem ipsum dolor sit amet aliquet sapien facilisis veultricies in. Curabitur scelerisque est sit amet massa aliquam gravida. Quisqn faucibus.
                        </p>
                        <button className="bg-navBlue hover:scale-105 transition-all text-white font-bold py-2 w-40 rounded focus:outline-none focus:shadow-outline" onClick={() => setLogin(true)}>
                            Login / Register
                        </button>
                    </div>
                    <div className='w-[1200px] h-[500px] relative'>
                        <Image className='hidden lg:block rounded object-cover relative shadow-2xl shadow-lightGrey' src="/landing.jpg" alt="logo" fill />
                    </div>
                </div>
            </div>
            {login && (
                <LoginModal setLogin={setLogin} login={login} />
            )}
        </div>
    )
}
export default Landing