'use client'
import React, { useState, useEffect } from 'react'
import Delete from './crud/delete'
import Update from './crud/update'
import { useCrudContext } from '@/components/context';
import { TiTick } from 'react-icons/ti'
import { MdDateRange } from 'react-icons/md'
import { isThisMinute } from 'date-fns'
import TaskForm from './home/taskForm'

function SingleTask({ singleId, singleEmail, singleTitle, singleDate, isImportant, isUpdate }) {

    const [showUpDelete, setShowUpDelete] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [isMax, setIsMax] = useState(false);
    const { checkMax, setCheckMax } = useCrudContext();

    console.log(checkMax)

    useEffect(() => {
        if (typeof singleEmail !== "undefined" && singleEmail.length >= 70) {
            setIsMax(true)
        }
        else if (typeof singleEmail !== "undefined" && singleEmail.length <= 70) {
            setIsMax(false)
        }
        console.log(checkMax)
        setCheckMax(false)
    }, [checkMax])

    return (
        <>
            {!isUpdate
                ?
                <div className='flex w-full gap-4 items-center  '>
                    <div className={`${isImportant ? `border-2 border-important shadow-important shadow-sm` : `border-2 border-lightGrey shadow-md`} flex flex-col justify-center px-3 rounded-xl  bg-white w-full p-2 my-4`} onMouseOver={() => setShowUpDelete(true)} onMouseLeave={() => setShowUpDelete(false)}>
                        <div className='flex items-center h-8 justify-between'>
                            <h5 className='cursor-default text-lg text-navBlue font-bold'>{singleTitle}</h5>
                            {showUpDelete &&
                                <div className='flex flex-col items-start justify-between h-full '>
                                    <div className="flex items-center justify-center">
                                        <Delete deletedId={singleId} />
                                        <Update updateId={singleId} />
                                    </div>
                                </div>
                            }
                        </div>
                        <p className='cursor-default max-w-[90%] break-all min-h-[44px] h-full py-2'>
                            {isMax ? `${singleEmail.slice(0, 70)} . . .` : singleEmail}
                            {typeof singleEmail !== "undefined" && singleEmail?.length >= 70 && (
                                <span
                                    className="text-navBlue cursor-pointer font-base py-2 px-4 rounded mt-2"
                                    onClick={() => setIsMax(!isMax)}>
                                    {isMax ? 'Read More' : 'Read Less'}
                                </span>
                            )}
                        </p>
                        <div className='flex justify-between items-center'>
                            <span className='cursor-default flex text-sm items-center gap-2 opacity-90 h-8 text-red text-center  font-bold italic '>
                                <MdDateRange />
                                {singleDate}
                            </span>
                            <button className={`text-center rounded-md w-8 h-8 transition-all duration-300  ${isDone ? `bg-green` : `bg-white `} `} onClick={() => setIsDone(true)}>
                                <TiTick className={`${isDone ? `text-white ` : `text-black opacity-50 hover:text-green`}  text-2xl  text-center m-auto`} />
                            </button>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <TaskForm isUpdate={isUpdate} updateId={singleId} prevTitle={singleTitle} prevDate={singleDate} prevDesc={singleEmail} prevImportant={isImportant} />
                </div>
            }
        </>
    )
}

export default SingleTask

