'use client'
import React, { useState } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoPersonCircle } from 'react-icons/io5'
import MenuModal from './menuModal'
function Navbar() {

    const [menu, setMenu] = useState(false)

    return (
        <div>
            <div className='flex justify-between items-center mx-4 my-4'>
                <HiMenuAlt2 className='text-2xl text-navBlue cursor-pointer' onClick={() => setMenu(true)} />
                <h1>logo</h1>
                <IoPersonCircle className='text-2xl text-navBlue' />
            </div>
            {menu && (
                <MenuModal setMenu={setMenu} />
            )}
        </div>

    )
}

export default Navbar