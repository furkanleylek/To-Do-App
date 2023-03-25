'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoPersonCircle } from 'react-icons/io5'

function SideBar() {

    const [activePage, setActivePage] = useState(0)

    return (
        <div className='flex flex-col w-40 h-full justify-between items-center py-12 px-2 bg-navBlue'>
            <Image className='justify-start' src="/favicon.ico" alt="logo" width="64" height="64" />
            <div className='flex flex-col items-center justify-center w-full mb-60 gap-8'>
                <Link className={`${activePage == 0 ? `text-navBlue bg-white` : `text-white `} test-xl font-bold hover:bg-white hover:text-navBlue hover:transition-all w-full p-2 rounded `} onClick={() => setActivePage(0)} href="/stats">Stats</Link>
                <Link className={`${activePage == 1 ? `text-navBlue bg-white` : `text-white `} test-xl font-bold hover:bg-white hover:text-navBlue hover:transition-all w-full p-2 rounded `} onClick={() => setActivePage(1)} href="/">All Tasks</Link>
                <Link className={`${activePage == 2 ? `text-navBlue bg-white` : `text-white `} test-xl font-bold hover:bg-white hover:text-navBlue hover:transition-all w-full p-2 rounded `} onClick={() => setActivePage(2)} href="/addjob">Add Task</Link>
            </div>
            <button>
                <IoPersonCircle className='text-6xl text-white' />
            </button>
        </div>
    )
}

export default SideBar