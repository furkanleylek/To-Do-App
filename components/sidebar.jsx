'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { IoPersonCircle, IoStatsChart } from 'react-icons/io5'
import { MdPostAdd } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { FaList, FaCheck } from 'react-icons/fa'
import { getCookie, deleteCookie } from 'cookies-next'
import { useCrudContext } from '@/components/context';
import LoadingComponent from './loading'

function SideBar() {

    const [activePage, setActivePage] = useState(0)
    const [currentName, setCurrentName] = useState('');
    const router = useRouter()
    const { isLoadingShow, setIsLoadingShow } = useCrudContext()

    useEffect(() => {
        setCurrentName(getCookie('username'));
    }, []);
    return (
        <div className='flex flex-col w-48 lg:w-60 h-screen justify-between items-center py-12 px-2 bg-navBlue'>
            <FaCheck className='text-navBlue text-[100px]s' />
            <div className='flex flex-col items-center justify-center w-full mb-60 gap-8'>
                <Link className={`${activePage == 0 ? ` text-navBlue bg-white` : `text-white `} flex gap-5 items-center justify-start test-xl font-bold hover:bg-white hover:text-navBlue hover:transition-all w-full p-2 rounded `} onClick={() => setActivePage(0)} href="/stats">
                    <span className='text-2xl'><IoStatsChart /></span>
                    Stats
                </Link>
                <Link className={`${activePage == 1 ? `text-navBlue bg-white` : `text-white `} flex gap-5 items-center justify-start test-xl font-bold hover:bg-white hover:text-navBlue hover:transition-all w-full p-2 rounded `} onClick={() => setActivePage(1)} href="/">
                    <span className='text-xl'><FaList /></span>
                    All Tasks
                </Link>
                <Link className={`${activePage == 2 ? `text-navBlue bg-white` : `text-white `} flex gap-5 items-center justify-start test-xl font-bold hover:bg-white hover:text-navBlue hover:transition-all w-full p-2 rounded `} onClick={() => setActivePage(2)} href="/addtask" >
                    <span className='text-2xl'><MdPostAdd /></span>
                    Add Task
                </Link>
            </div>
            <div className='flex flex-col items-center justify-center w-full gap-6'>
                <button className='flex flex-col items-center justify-center w-full'>
                    <IoPersonCircle className='text-6xl text-white' />
                    <span className='text-white text-[22px] capitalize font-bold mt-2'>{currentName}</span>
                </button>
                <button
                    className=' text-white text-center border-[3px] border-lightGrey test-xl font-bold hover:bg-white hover:border-transparent hover:text-navBlue hover:transition-all w-full p-2 rounded '
                    onClick={() => { deleteCookie('token'), deleteCookie('username'), setIsLoadingShow(true), router.push('/landing') }}
                >
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