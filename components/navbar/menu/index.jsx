'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoStatsChart } from 'react-icons/io5'
import { MdPostAdd } from 'react-icons/md'
import { FaList, FaCheck } from 'react-icons/fa'


function Menu({ setIsOpen }) {


    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='flex flex-col justify-center w-full h-full '>
                <div className='flex flex-col w-full h-full justify-between gap-4  items-center py-12 px-2 bg-navBlue'>
                    <FaCheck className='text-white text-[60px] mt-10 justify-start' />
                    <h3 className='text-white text-3xl border-b-2 text-center pb-2 w-3/5 font-mono italic'>To Do</h3>
                    <div className='flex flex-col items-center  w-full h-[80%] gap-8'>
                        <Link className={` flex gap-5 items-center justify-start test-xl font-bold text-white hover:bg-white hover:text-navBlue hover:transition-all w-full p-2 rounded `} href="/stats" onClick={() => setIsOpen(() => false)}>
                            <span className='text-2xl'><IoStatsChart /></span>
                            Stats
                        </Link>
                        <Link className={` flex gap-5 items-center justify-start test-xl font-bold text-white hover:bg-white hover:text-navBlue hover:transition-all w-full p-2 rounded `} href="/" onClick={() => setIsOpen(() => false)}>
                            <span className='text-xl'><FaList /></span>
                            All Tasks
                        </Link>
                        <Link className={` flex gap-5 items-center justify-start test-xl font-bold text-white hover:bg-white hover:text-navBlue hover:transition-all w-full p-2 rounded `} href="/addtask" onClick={() => setIsOpen(() => false)}>
                            <span className='text-2xl'><MdPostAdd /></span>
                            Add Task
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu