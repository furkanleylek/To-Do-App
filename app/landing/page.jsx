'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import LoginModal from '@/components/login/loginModal'
import LoadingComponent from '@/components/loading'
import { useCrudContext } from '@/components/context';
import check from 'public/bluecheck.png'
function Landing() {

    const [login, setLogin] = useState(false)
    const { isLoadingShow } = useCrudContext()

    return (
        <div className='flex flex-col justify-center  mt-8  relative w-[85%] lg:w-[80%] m-auto h-full'>
            <Image src={check} alt='check' width={70} height={70} />
            <div className='flex flex-col justify-center w-full m-auto h-full  border-navBlue'>
                <div className='flex w-full items-center '>
                    <div className='flex flex-col w-full gap-6'>
                        <h1 className='text-[#60BDFB] font-extrabold text-2xl italic'>To - Do App</h1>
                        <p className=' w-[80%] lg:w-1/2 text-[12px] md:text-base text-white font-semibold '>
                            Lorem ipsum dolor sit amet aliquet sapien facilisis veultricies in. Curabitur scelerisque est sit amet massa aliquam gravida. Quisqn faucibus.
                        </p>
                        <button className="bg-navBlue hover:scale-105 transition-all text-white font-bold py-2 w-40 rounded focus:outline-none focus:shadow-outline" onClick={() => setLogin(true)}>
                            Login / Register
                        </button>
                    </div>
                    {/* <div className='w-[1200px] h-[500px] relative'>
                        <Image className='hidden lg:block rounded object-cover relative shadow-2xl shadow-lightGrey' src="/landing.jpg" alt="logo" fill />
                    </div> */}
                </div>
            </div>
            {login && (
                isLoadingShow
                    ?
                    <LoadingComponent />
                    :
                    <LoginModal setLogin={setLogin} login={login} />
            )}
        </div>
    )
}
export default Landing