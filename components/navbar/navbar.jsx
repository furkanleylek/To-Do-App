'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { HiMenuAlt2 } from 'react-icons/hi'
import { useCrudContext } from '@/components/context';
import { IoPersonCircle } from 'react-icons/io5'
import { FiLogOut } from 'react-icons/fi'
import { AiOutlineClose, AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import Menu from './menu'
import OutsideClickHandler from 'react-outside-click-handler'
import { getCookie, deleteCookie } from 'cookies-next'
import LoadingComponent from '../loading'
function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [logOut, setLogOut] = useState(false)
    const [currentName, setCurrentName] = useState('');
    const router = useRouter()
    const { isLoadingShow, setIsLoadingShow } = useCrudContext()
    useEffect(() => {
        setCurrentName(getCookie('username'));
    }, []);

    // fApVirXJLFb6SzhG
    return (
        <div className='block md:hidden pt-2 bg-transparent ' >
            <div className='flex justify-between items-start  mx-4 my-4'>
                <button
                    className="z-50 cursor-pointer transition-all text-4xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <AiOutlineClose className='text-navBlue fixed bg-lightGrey hover:scale-105 rounded-full p-2' onClick={() => setIsOpen(false)} />
                    ) : (
                        <HiMenuAlt2 className='text-navBlue hover:scale-105 ' onClick={() => setIsOpen(true)} />
                    )}
                </button>
                <button className='w-36 flex flex-col justify-between h-20'>
                    <div className='flex font-bold items-center justify-between px-2 w-full py-1 rounded opacity-90 hover:opacity-100 bg-navBlue transition-all' onClick={() => setLogOut(() => !logOut)}>
                        <IoPersonCircle className='text-2xl text-white' />
                        <span className='text-white text-center capitalize'>{currentName}</span>
                        {logOut
                            ?
                            <AiOutlineCaretUp className='text-white' />
                            :
                            <AiOutlineCaretDown className='text-white' />
                        }
                    </div>
                    {logOut &&
                        <span className='flex items-center justify-start gap-5 px-2 w-full font-bold py-1 rounded opacity-70 hover:opacity-100 bg-midnight text-white' onClick={() => { deleteCookie('token'), deleteCookie('username'), setIsLoadingShow(true), router.push('/landing') }}>
                            <span className='text-2xl'><FiLogOut /></span>
                            Log Out
                        </span>
                    }
                </button>
            </div>
            {isLoadingShow && (
                <LoadingComponent />
            )}
            {/* Sidebar - Open - Close */}
            <OutsideClickHandler onOutsideClick={() => { setIsOpen(false) }} display="contents">
                <div
                    className={`sidebar fixed z-10 top-0 left-0 h-screen w-60 bg-white shadow-lg transform transition-all duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <Menu setIsOpen={setIsOpen} />
                </div>
            </OutsideClickHandler>
        </div>

    )
}

export default Navbar