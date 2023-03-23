'use client'
import React, { useState } from 'react'
import Delete from './crud/delete'
import Update from './crud/update'
import { TiTick } from 'react-icons/ti'
import { MdDateRange } from 'react-icons/md'

function SingleTask({ singleId, singleEmail, singleTitle, singleDate }) {

    const [showUpDelete, setShowUpDelete] = useState(false)
    const [isDone, setIsDone] = useState(false)
    return (
        <div className='flex w-full gap-4 items-center'>

            <div className='flex flex-col justify-center rounded-xl border-lightGrey bg-white w-full p-2 my-4 shadow-md' onMouseOver={() => setShowUpDelete(true)} onMouseLeave={() => setShowUpDelete(false)}>
                <div className='flex items-center h-8 justify-between'>
                    <h5 className='text-lg text-navBlue font-bold'>{singleTitle}</h5>
                    {showUpDelete &&
                        <div className='flex flex-col items-start justify-between h-full '>
                            <div className="flex items-center justify-center">
                                <Delete deletedId={singleId} />
                                <Update updateId={singleId} />
                            </div>

                        </div>
                    }
                </div>
                <h5 className='h-8'>{singleEmail}</h5>
                <div className='flex justify-between items-center'>
                    <span className='flex items-center gap-2 opacity-90 h-8 text-red text-center  font-bold italic '>
                        <MdDateRange />
                        {singleDate}
                    </span>
                    <button className={`border-2 text-center rounded-md w-8 h-8 transition-all  ${isDone ? `bg-green border-green` : `bg-white border-grey`} `} onClick={() => setIsDone(true)}>
                        <TiTick className={`${isDone ? `text-white ` : `text-black opacity-50 hover:text-green`}  text-2xl  text-center m-auto`} />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SingleTask