'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useCrudContext } from '@/components/context';
import { AiOutlineClose } from 'react-icons/ai'
import { MdDateRange } from 'react-icons/md'
import { GrStar } from 'react-icons/gr'
import { IoMdSend } from 'react-icons/io'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getCookie } from 'cookies-next'



function generateKey() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.random() * n);
    }
    return retVal;
}



function TaskForm({ isUpdate, updateId, prevTitle, prevDate, prevDesc, prevImportant }) {
    const { allJobs, setAllJobs, currentData, setCurrentData, setAddTask, setCheckMaxDescLength } = useCrudContext();
    const [title, setTitle] = useState(typeof prevTitle == "undefined" ? '' : prevTitle)
    const [textAreaValue, setTextAreaValue] = useState(typeof prevDesc == "undefined" ? '' : prevDesc);
    const [selectedDate, setSelectedDate] = useState(typeof prevDate == null ? '' : prevDate)
    const [isImportant, setIsImportant] = useState(prevImportant)
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [datePickerPos, setDatePickerPos] = useState({}); // DatePicker'ın konumu
    const inputRef = useRef(null);

    let key = generateKey()

    useEffect(() => {
        window.token = getCookie('token')
        console.log(token)
    }, [])

    async function handleData() {
        try {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: token,
                    id: key,
                    desc: textAreaValue,
                    title: title,
                    date: selectedDate,
                    important: isImportant,
                    isUpdate: false,
                    isCheck: false,
                })
            });

            const data = await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    async function updateData() {
        try {
            await fetch(`/api/tasks`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: updateId,
                    desc: textAreaValue,
                    title: title,
                    date: selectedDate,
                    important: isImportant,
                    isUpdate: false,
                    isCheck: false,
                })
            })
        } catch (error) {
            console.log("Error:", error)
        }
    }

    const handleClick = (e) => {
        // Tıklanan elemanın koordinatları
        const clickedElementCoords = e.target.getBoundingClientRect();
        // DatePicker'ın yeni konumu
        setDatePickerPos({
            top: clickedElementCoords.top - 10, // Yukarıya doğru 10 piksel boşluk
            left: clickedElementCoords.left, // Tıklanan elemanın sol tarafına hizalanır
        });
    };

    return (
        <div className='flex flex-col justify-between border-2 rounded-sm border-line w-full '>
            <input
                type="text"
                placeholder='Task name'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="px-4 py-2 font-bold border-b-2 text-secondary rounded-sm border-line outline-none focus:outline-none appearance-none leading-tight focus:shadow-outline"
                name='title'
            />
            <textarea
                className="w-full px-4 py-4 text-font focus:outline-none appearance-none leading-tight focus:shadow-outline focus:border-secondary"
                rows="4"
                placeholder="Enter your text here"
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
            />
            <div className='flex flex-wrap items-center justify-between border-t-2 pt-2 bg-accent rounded-b-[20px] border-line px-2'>
                <div className='flex items-center mb-2 gap-4 sm:gap-8 bg-accent px-3 flex-wrap '>
                    {/* date */}
                    <div className="flex h-8 border-2 border-line hover:bg-hover  focus:bg-primary px-1 sm:px-0 rounded items-center justify-center ">
                        <MdDateRange className='text-red text-md sm:text-xl sm:ml-2' />
                        <div className="rounded-lg">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => {
                                    setSelectedDate(date);
                                }}
                                onClick={handleClick}
                                calendarClassName="bg-white pt-6 rounded-lg shadow-md p-4"
                                value={
                                    selectedDate ? selectedDate : 'End Date'
                                }
                                className="text-center w-14 sm:w-24  mb-1 hover:bg-hover bg-transparent caret-transparent text-[10px] sm:text-sm font-medium focus:outline-none appearance-none leading-tight focus:shadow-outline cursor-pointer"
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                highlightDates={[
                                    {
                                        "background-color": "rgba(59, 130, 246, 0.3)",
                                        "border-radius": "50%",
                                        "border-width": "2px",
                                        "border-style": "solid",
                                        "border-color": "#3B82F6",
                                        filter: "brightness(85%)",
                                        dates: [new Date()],
                                    },
                                ]}
                            />
                        </div>
                    </div>
                    {/* date */}
                    {/* important */}

                    <button
                        className={`${isImportant ? `bg-important border-important` : `hover:bg-hover  border-line`} border-2 transition-all flex h-8 px-1 sm:px-0 sm:min-w-[128px] rounded items-center justify-center gap-2`}
                        onClick={() => setIsImportant((prev) => !prev)}
                    >
                        <GrStar className={`${isImportant ? `text-fontSecond` : `text-important`} text-md sm:text-2xl`} />
                        <span className={`${isImportant ? `text-fontSecond` : `text-font`} text-[10px] sm:text-sm font-medium`}>Important</span>
                    </button>
                    {/* select */}
                </div>
                <div className='flex flex-wrap items-center justify-evenly mb-2* '>
                    <AiOutlineClose className='w-7 h-7 sm:w-8 sm:h-8 rounded-lg p-[6px] cursor-pointer hover:bg-line text-font'
                        onClick={() => {
                            {
                                setAddTask(false)
                                setAllJobs(
                                    allJobs.map((job) => {
                                        return job.id == updateId ? { ...job, isUpdate: false } : job;
                                    })
                                )

                            }
                        }} />
                    {isUpdate
                        ?
                        <button
                            onClick={() => {
                                {
                                    updateData()
                                    setAllJobs(
                                        allJobs.map((job) => {
                                            return job.id == updateId ? { ...job, desc: textAreaValue, title: title, date: selectedDate, important: isImportant, isUpdate: false, isCheck: false } : job;
                                        })
                                    )
                                    setCurrentData(
                                        currentData.map((job) => {
                                            return job.id == updateId ? { ...job, desc: textAreaValue, title: title, date: selectedDate, important: isImportant, isUpdate: false, isCheck: false } : job;
                                        })
                                    )
                                    setAddTask(false)
                                    setCheckMaxDescLength(true)
                                }
                            }}
                            disabled={title ? false : true && textAreaValue ? false : true}
                            className="disabled:opacity-50 disabled:cursor-not-allowed opacity-90 hover:opacity-100 cursor-pointer"
                        >
                            <IoMdSend className='w-7 h-7 sm:w-8 sm:h-8 rounded-lg p-[6px] border-2 bg-darkRed text-white'
                            />
                        </button>
                        :
                        <button
                            onClick={() => {
                                {
                                    handleData()
                                    setAllJobs(oldArray => [...oldArray, { id: key, user_id: token, desc: textAreaValue, title: title, date: selectedDate, important: isImportant, isUpdate: false, isCheck: false }])
                                    setCurrentData(oldArray => [...oldArray, { id: key, user_id: token, desc: textAreaValue, title: title, date: selectedDate, important: isImportant, isUpdate: false, isCheck: false }])
                                    setAddTask(false)
                                    setCheckMaxDescLength(true)
                                }
                            }}
                            disabled={title ? (textAreaValue ? false : true) : true}
                            className="disabled:opacity-50 disabled:cursor-not-allowed opacity-90 hover:opacity-100 cursor-pointer "
                        >
                            <IoMdSend className='w-7 h-7 sm:w-8 sm:h-8 rounded-lg p-[6px]  border-2 bg-darkRed text-white'
                            />
                        </button>
                    }
                </div>

            </div>
        </div>
    )
}

export default TaskForm