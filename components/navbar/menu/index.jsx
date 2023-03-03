import React from 'react'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import { MdOutlinePostAdd } from 'react-icons/md'
import { IoMdDoneAll } from 'react-icons/io'
import { GiSandsOfTime } from 'react-icons/gi'

function Menu({ setMenu }) {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <AiOutlineClose className='text-4xl text-red self-start m-2' onClick={() => setMenu(false)} />
            <div className='flex flex-col justify-center items-center w-full h-full '>
                <Link className='py-6 w-36 flex items-center justify-evenly text-midnight hover:text-navBlue opacity-90 hover:opacity-100  duration-350' href='/addjob' onClick={() => setMenu(false)} ><MdOutlinePostAdd className='text-2xl  ' /><h5 className='text-black'>Add Job</h5></Link>
                <Link className='py-6 w-36 flex items-center justify-evenly text-midnight hover:text-navBlue opacity-90 hover:opacity-100  duration-350' href='/donejobs' onClick={() => setMenu(false)} ><IoMdDoneAll className='text-2xl ' /><h5 className='text-black'>donejobs</h5></Link>
                <Link className='py-6 w-36 flex items-center justify-evenly text-midnight hover:text-navBlue opacity-90 hover:opacity-100  duration-350' href='/inprogress' onClick={() => setMenu(false)} ><GiSandsOfTime className='text-2xl' /><h5 className='text-black'>inprogress</h5></Link>
            </div>
        </div>
    )
}

export default Menu