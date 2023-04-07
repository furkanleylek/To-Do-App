'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoPersonCircle } from 'react-icons/io5'
import { AiOutlineClose, AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import Menu from './menu'
import OutsideClickHandler from 'react-outside-click-handler'
import { getCookie, deleteCookie } from 'cookies-next'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [logOut, setLogOut] = useState(false)
    const currentIdRef = useRef()
    const [currentId, setCurrentId] = useState()
    const usersRef = useRef([])
    const router = useRouter()

    useEffect(() => {
        usersRef.current = JSON.parse(window.localStorage.getItem("users"))
        setCurrentId(() => getCookie('currentId'))
    }, [])

    const currentName = usersRef.current?.map((user) => {
        if (user.id == currentId) {
            return user.name
        }
    })
    // fApVirXJLFb6SzhG
    return (
        <div className='block md:hidden  pt-2' >
            <div className='flex justify-between items-start  mx-4 my-4'>
                <button
                    className="z-50 cursor-pointer transition-all text-4xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <AiOutlineClose className='text-navBlue bg-lightGrey hover:scale-105 rounded-full p-2' onClick={() => setIsOpen(false)} />
                    ) : (
                        <HiMenuAlt2 className='text-navBlue hover:scale-105 ' onClick={() => setIsOpen(true)} />
                    )}
                </button>
                <button className='w-36 flex flex-col justify-between h-20'>
                    <div className='flex font-bold items-center justify-evenly w-full py-1 rounded opacity-90 hover:opacity-100 bg-navBlue transition-all' onClick={() => setLogOut(() => !logOut)}>
                        <IoPersonCircle className='text-2xl text-white' />
                        <span className='text-white text-center'>{currentName}</span>
                        {logOut
                            ?
                            <AiOutlineCaretUp className='text-white' />
                            :
                            <AiOutlineCaretDown className='text-white' />
                        }
                    </div>
                    {logOut &&
                        <span className='w-full font-bold py-1 rounded opacity-70 hover:opacity-100 bg-midnight text-white' onClick={() => { deleteCookie('token'), router.push('/landing') }}>
                            Log Out
                        </span>
                    }
                </button>

            </div>

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
