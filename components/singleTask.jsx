'use client'
import React, { useState, useEffect } from 'react'
import Delete from './crud/delete'
import Update from './crud/update'
import { useCrudContext } from './context'
import { TiTick } from 'react-icons/ti'
import { MdDateRange } from 'react-icons/md'
import { GrStar } from 'react-icons/gr'
import TaskForm from './home/taskForm'

function SingleTask({ singleId, singleDesc, singleTitle, singleDate, isImportant, isUpdate, isCheck }) {
    const [showUpDelete, setShowUpDelete] = useState(false)
    const [isMax, setIsMax] = useState(false);
    const [isDone, setIsDone] = useState(false)
    const { checkMaxDescLength, setCheckMaxDescLength, setDoneTasks, allJobs, setAllJobs, setCurrentData, setCountDoneTasks } = useCrudContext();

    useEffect(() => {
        if (typeof singleDesc !== "undefined" && singleDesc.length >= 115) {
            setIsMax(true)
        }
        else if (typeof singleDesc !== "undefined" && singleDesc.length <= 115) {
            setIsMax(false)
        }
        setCheckMaxDescLength(false)

        const timerAnimation = setTimeout(() => {
            setAllJobs(
                allJobs.map((task) => {
                    return task.id == singleId ? { ...task, isCheck: false } : task;
                })
            )
        }, 2000);

        return () => clearTimeout(timerAnimation);

    }, [checkMaxDescLength])
    function getSelectedDate(value) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const selected = new Date(value);

        if (selected.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (selected.toDateString() === tomorrow.toDateString()) {
            return 'Tomorrow';
        } else if (selected > today && selected < new Date(today.getTime() + (5 * 24 * 60 * 60 * 1000))) {
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return days[selected.getDay()];
        } else {
            const options = { month: 'long', day: 'numeric' };
            return selected.toLocaleDateString('en-US', options);
        }
    }
    const checkedIndex = allJobs.findIndex((e) => { return e.id == singleId })
    const arrangeDate = getSelectedDate(singleDate)

    function convertDateFormat(dateString) {
        const date = new Date(dateString);
        const datePart = date.toDateString();
        const timePart = date.toTimeString().split(' ')[0];
        return `${datePart} ${timePart}`;
    }

    const convertedDate = convertDateFormat(singleDate);
    const timeZone = 'GMT+0300 (GMT+03:00)';
    const updatedDate = convertedDate + ' ' + timeZone;
    const myDate = new Date(updatedDate);

    return (
        <>
            {!isUpdate
                ?
                <div className={`flex w-full items-center ${isDone && `animate-rightToOutside animation-delay-400`} ${isCheck && `animate-outSideToLeft animation-delay-200`} `}>
                    <div className={`relative bg-primary border-2 border-line shadow-md flex flex-col justify-center gap-4 py-2 px-3 rounded-sm w-full`} onMouseOver={() => setShowUpDelete(true)} onMouseLeave={() => setShowUpDelete(false)}>
                        <div className='flex items-center h-8 justify-between flex-wrap'>
                            <h5 className='cursor-default text-lg text-secondary font-bold capitalize'>{singleTitle}</h5>
                            {showUpDelete &&
                                <div className='flex flex-col items-start justify-between h-full '>
                                    <div className="flex items-center justify-center">
                                        <Delete deletedId={singleId} />
                                        <Update updateId={singleId} />
                                    </div>
                                </div>
                            }
                        </div>
                        <p className='cursor-default max-w-[90%] break-all min-h-[86px] h-full py-2 font-semibold'>
                            {isMax ? `${singleDesc.slice(0, 115)}. . .` : singleDesc}
                            {typeof singleDesc !== "undefined" && singleDesc?.length >= 115 && (
                                <span
                                    className="text-secondary cursor-pointer font-base py-2  px-4 rounded mt-2"
                                    onClick={() => setIsMax(!isMax)}>
                                    {isMax ? 'Read More' : 'Read Less'}
                                </span>
                            )}
                        </p>
                        <div className='flex justify-between items-center flex-wrap'>
                            <span className='cursor-default flex text-sm items-center gap-2 opacity-90 h-8 text-red text-center  font-bold italic '>
                                <MdDateRange />
                                {arrangeDate}
                            </span>
                            <button
                                className={`text-center rounded-md w-8 h-8 transition-all duration-300  ${isDone ? `bg-green` : `bg-white `} `}
                                onClick={() => {
                                    setDoneTasks(() => [{ id: singleId, checkedIndex: checkedIndex, desc: singleDesc, title: singleTitle, date: singleDate, isImportant: isImportant, isUpdate: isUpdate, isCheck: true }])
                                    setIsDone(true)
                                    setTimeout(() => {
                                        setAllJobs((current) => current.filter((e) => e.id !== singleId))
                                        setCurrentData((current) => current.filter((e) => e.id !== singleId))
                                    }, 1000);
                                    setCountDoneTasks((prev) => prev + 1)
                                }}
                            >
                                <TiTick className={`${isDone ? `text-white ` : `text-black opacity-50 hover:text-green`}  text-2xl  text-center m-auto`} />
                            </button>
                        </div>
                        {isImportant && (
                            <GrStar className='text-important text-[26px] opacity-90 absolute top-[-12px] left-[-10px]' />
                        )}
                    </div>
                </div>
                :
                <TaskForm isUpdate={isUpdate} updateId={singleId} prevTitle={singleTitle} prevDate={myDate} prevDesc={singleDesc} prevImportant={isImportant} />
            }
        </>
    )
}

export default SingleTask

