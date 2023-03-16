'use client'
import React, { useState } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoPersonCircle } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'
import Menu from './menu'
import OutsideClickHandler from 'react-outside-click-handler'


function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='block md:hidden' >
            <div className='flex justify-between items-center mx-4 my-4 '>
                <button
                    className="z-10 cursor-pointer transition-all text-4xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <AiOutlineClose className='text-red' onClick={() => setIsOpen(false)} />
                    ) : (
                        <HiMenuAlt2 className='text-navBlue ' onClick={() => setIsOpen(true)} />
                    )}
                </button>
                <h1>logo</h1>
                <IoPersonCircle className='text-2xl text-navBlue' />
            </div>
            <OutsideClickHandler onOutsideClick={() => { setIsOpen(false) }} display="contents">
                <div
                    className={`sidebar fixed top-0 left-0 h-screen w-60 bg-white shadow-lg transform transition-all duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <Menu setIsOpen={setIsOpen} />
                </div>
            </OutsideClickHandler>
        </div>

    )
}

export default Navbar


// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     function toggleSidebar() {
//         setIsOpen(!isOpen);
//     }

//     return (
//         <>
//             {/* menü iconu */}
//             <button
//                 className="fixed top-4 left-4 p-2 rounded-md bg-gray-100 shadow-lg z-10"
//                 onClick={toggleSidebar}
//             >
//                 {isOpen ? (
//                     <AiOutlineClose />
//                 ) : (
//                     <HiMenuAlt2 />
//                 )}
//             </button>

//             {/* side bar */}
//             <div
//                 className={`sidebar fixed top-0 left-0 h-screen w-60 bg-white shadow-lg transform transition-all duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"
//                     }`}
//             >
//                 {/* sidebar içeriği buraya gelecek */}
//             </div>
//         </>
//     );
// }

// export default Navbar