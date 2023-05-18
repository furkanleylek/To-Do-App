'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { IoPersonCircle, IoStatsChart } from 'react-icons/io5'
import { MdPostAdd } from 'react-icons/md'
import { useRouter, usePathname } from 'next/navigation'
import { FaList, FaCheck, } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { getCookie, deleteCookie } from 'cookies-next'
import { useCrudContext } from '@/components/context';
import LoadingComponent from './loading'
import Image from 'next/image'
import logo from '../public/bluecheck.png'

function SideBar() {

    const [currentName, setCurrentName] = useState('');
    const router = useRouter()
    const pathName = usePathname()
    const { isLoadingShow, setIsLoadingShow } = useCrudContext()

    useEffect(() => {
        setCurrentName(getCookie('username'));
    }, []);
    return (
        <div className='flex flex-col w-48 lg:w-60 h-screen justify-between items-center  px-2 bg-secondary '>
            <div className='flex flex-col items-center justify-center w-full gap-16'>
                <Link href='/' className='pt-8'>
                    <Image src={logo} alt='logo' width={70} height={70} />
                </Link>
                <div className='flex flex-col items-center justify-center w-full gap-6'>
                    <Link className={`${pathName == '/' ? `text-secondary bg-primary` : `text-primary `} flex gap-5 items-center justify-start test-xl font-bold hover:bg-primary hover:text-secondary hover:transition-all w-full p-2 rounded `} href="/">
                        <span className='text-xl'><FaList /></span>
                        All Tasks
                    </Link>
                    <Link className={`${pathName == '/stats' ? ` text-secondary bg-primary` : `text-primary `} flex gap-5 items-center justify-start test-xl font-bold hover:bg-primary hover:text-secondary hover:transition-all w-full p-2 rounded `} href="/stats">
                        <span className='text-2xl'><IoStatsChart /></span>
                        Stats
                    </Link>
                    <Link className={`${pathName == '/addtask' ? `text-secondary bg-primary` : `text-primary `} flex gap-5 items-center justify-start test-xl font-bold hover:bg-primary hover:text-secondary hover:transition-all w-full p-2 rounded `} href="/addtask" >
                        <span className='text-2xl'><MdPostAdd /></span>
                        Add Task
                    </Link>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full gap-6 pb-12'>
                <button className='flex flex-col items-center justify-center w-full  py-6 px-10 rounded-full text-primary transition-all'>
                    <IoPersonCircle className='text-6xl' />
                    <span className='text-[22px] capitalize font-bold mt-2'>{currentName}</span>
                </button>
                <button
                    className=' text-white flex gap-5 items-center justify-start test-xl font-bold hover:bg-primary hover:border-transparent hover:text-secondary hover:transition-all w-full p-2 rounded '
                    onClick={() => { deleteCookie('token'), deleteCookie('username'), setIsLoadingShow(true), router.push('/landing') }}
                >
                    <span className='text-2xl'><FiLogOut /></span>
                    Log Out
                </button>
            </div>
            {isLoadingShow && (
                <LoadingComponent />
            )}
        </div>
    )
}

export default SideBar