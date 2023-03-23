'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { MdOutlinePostAdd } from 'react-icons/md'
import { IoMdDoneAll } from 'react-icons/io'
import { AiOutlineArrowDown, AiOutlineArrowLeft } from 'react-icons/ai'

function Menu({ setMenu }) {

    const [showProjects, setShowProjects] = useState(false)

    return (
        <div className='flex flex-col items-center justify-center w-full h-full px-4 '>
            <div className='flex flex-col justify-center w-full h-full '>
                <Link className='py-6 w-36 flex items-center justify-evenly text-midnight hover:text-navBlue opacity-90 hover:opacity-100  duration-350' href='/addjob' onClick={() => setMenu(false)} ><MdOutlinePostAdd className='text-2xl  ' /><h5 className='text-black'>Add Job</h5></Link>
                <button className='w-full flex justify-between items-center rounded hover:bg-lightGrey cursor-pointer transition-all'>
                    <span>Projects</span>
                    {showProjects ?
                        <AiOutlineArrowDown onClick={() => setShowProjects(false)} />
                        :
                        <AiOutlineArrowLeft onClick={() => setShowProjects(true)} />
                    }
                </button>
                {showProjects &&
                    <div>
                        <Link className='py-6 w-36 flex items-center justify-evenly text-midnight hover:text-navBlue opacity-90 hover:opacity-100  duration-350' href='/donejobs' onClick={() => setMenu(false)} ><IoMdDoneAll className='text-2xl ' /><h5 className='text-black'>donejobs</h5></Link>
                        <Link className='py-6 w-36 flex items-center justify-evenly text-midnight hover:text-navBlue opacity-90 hover:opacity-100  duration-350' href='/donejobs' onClick={() => setMenu(false)} ><IoMdDoneAll className='text-2xl ' /><h5 className='text-black'>donejobs</h5></Link>
                        <Link className='py-6 w-36 flex items-center justify-evenly text-midnight hover:text-navBlue opacity-90 hover:opacity-100  duration-350' href='/donejobs' onClick={() => setMenu(false)} ><IoMdDoneAll className='text-2xl ' /><h5 className='text-black'>donejobs</h5></Link>
                    </div>}
            </div>
        </div>
    )
}

export default Menu