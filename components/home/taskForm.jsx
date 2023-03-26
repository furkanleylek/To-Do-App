'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useCrudContext } from '@/components/context';
import { AiOutlineClose } from 'react-icons/ai'
import { MdDateRange, MdLabelImportant } from 'react-icons/md'
import { IoMdSend } from 'react-icons/io'
import { BsFlag } from 'react-icons/bs'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function generateKey() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.random() * n);
    }
    return retVal;
}

function TaskForm({ isUpdate, updateId, prevTitle, prevDesc, prevImportant }) {
    const { allJobs, setAllJobs, setHoverTask, setAddTask, setCheckMaxDescLength } = useCrudContext();
    const [title, setTitle] = useState(typeof prevTitle == "undefined" ? '' : prevTitle)
    const [textAreaValue, setTextAreaValue] = useState(typeof prevDesc == "undefined" ? '' : prevDesc);
    const [selectedDate, setSelectedDate] = useState(null)
    const [isImportant, setIsImportant] = useState(prevImportant)
    const titleRef = useRef(null);
    const textAreRef = useRef(null);
    const dateRef = useRef(null);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    let key = generateKey()

    const scrollToRef = (ref) => {
        if (isKeyboardOpen) {
            scroll.scrollTo(ref.current.offsetTop - 16);
        }
    };

    useEffect(() => {
        const handleFocus = () => {
            setIsKeyboardOpen(true);
        };

        const handleBlur = () => {
            setIsKeyboardOpen(false);
        };

        window.addEventListener("focusin", handleFocus);
        window.addEventListener("focusout", handleBlur);

        return () => {
            window.removeEventListener("focusin", handleFocus);
            window.removeEventListener("focusout", handleBlur);
        };
    }, []);

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

    return (
        <div className='flex flex-col justify-between border-2 rounded-xl border-lightGrey w-full my-4 max-w-xl '>
            <input type="text" placeholder='TITLE'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="px-4 py-2 border-b-2 rounded-t-xl border-lightGrey shadow-md focus:outline-none appearance-none leading-tight focus:shadow-outline"
                name='title'
                ref={titleRef}
                onFocus={() => scrollToRef(titleRef)}
            />
            <textarea
                className="w-full px-4 py-2 text-black focus:outline-none appearance-none leading-tight focus:shadow-outline focus:border-navBlue"
                rows="4"
                placeholder="Enter your text here"
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
                ref={textAreRef}
                onFocus={() => scrollToRef(textAreRef)}
            />
            <div className='flex flex-wrap items-center justify-between border-t-2 pt-2 bg-white rounded-b-[20px] border-lightGrey px-2'>
                <div className='flex items-center mb-2 gap-4 sm:gap-8 bg-white px-3 flex-wrap '>
                    {/* date */}
                    <div className="flex h-8 border-2 border-grey hover:bg-silver focus:bg-silver px-1 sm:px-0 rounded items-center justify-center ">
                        <MdDateRange className='text-red text-md sm:text-xl sm:ml-2' />
                        <div className="rounded-lg">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => {
                                    setSelectedDate(date);
                                }}
                                ref={dateRef}
                                onFocus={() => scrollToRef(dateRef)}
                                calendarClassName="bg-white pt-6 rounded-lg shadow-md p-4"
                                value={
                                    selectedDate ? getSelectedDate(selectedDate) : 'End Date'
                                }
                                className="text-center w-14 sm:w-24  mb-1 hover:bg-silver bg-transparent caret-transparent text-[10px] sm:text-sm font-medium focus:outline-none appearance-none leading-tight focus:shadow-outline cursor-pointer"
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
                        className={`${isImportant ? `bg-important border-transparent` : `hover:bg-silver border-2 border-grey`} transition-all flex h-8 px-1 sm:px-0 sm:min-w-[128px] rounded items-center justify-center gap-2`}
                        onClick={() => setIsImportant((prev) => !prev)}
                    >
                        <MdLabelImportant className={`${isImportant ? `text-white` : `text-important`} text-md sm:text-2xl`} />
                        <span className={`${isImportant ? `text-white` : `text-black`} text-[10px] sm:text-sm font-medium`}>Important</span>
                    </button>
                    {/* select */}
                </div>
                <div className='flex flex-wrap items-center justify-evenly mb-2 '>
                    <AiOutlineClose className='w-7 h-7 sm:w-8 sm:h-8 rounded-lg p-[6px] cursor-pointer hover:bg-lightGrey text-metal'
                        onClick={() => {
                            {
                                setAddTask(false)
                                setHoverTask(false)
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
                                    setAllJobs(
                                        allJobs.map((job) => {
                                            return job.id == updateId ? { ...job, email: textAreaValue, title: title, date: getSelectedDate(selectedDate), important: isImportant, isUpdate: false, isCheck: false } : job;
                                        })
                                    )
                                    setAddTask(false)
                                    setHoverTask(false)
                                    setCheckMaxDescLength(true)
                                }
                            }}
                            disabled={title ? false : true}
                            className="disabled:opacity-50 disabled:cursor-not-allowed opacity-90 hover:opacity-100 cursor-pointer "
                        >
                            <IoMdSend className='w-7 h-7 sm:w-8 sm:h-8 rounded-lg p-[6px]  border-2 bg-darkRed text-white'
                            />
                        </button>
                        :
                        <button
                            onClick={() => {
                                {
                                    setAllJobs(oldArray => [...oldArray, { id: key, email: textAreaValue, title: title, date: getSelectedDate(selectedDate), important: isImportant, isUpdate: false, isCheck: false }])
                                    setAddTask(false)
                                    setHoverTask(false)
                                    setCheckMaxDescLength(true)
                                }
                            }}
                            disabled={title ? false : true}
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