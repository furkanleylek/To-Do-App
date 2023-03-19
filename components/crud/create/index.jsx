'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useCrudContext } from '@/components/context';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { MdDateRange } from 'react-icons/md'
import { IoMdSend } from 'react-icons/io'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.random() * n);
    }
    return retVal;
}

function Create({ addTask, setAddTask, setHoverTask }) {

    const { allJobs, setAllJobs } = useCrudContext();
    const [title, setTitle] = useState('')
    const [textAreaValue, setTextAreaValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedOption, setSelectedOption] = useState("");

    const titleRef = useRef(null);
    const textAreRef = useRef(null);
    const dateRef = useRef(null);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    let key = generatePassword()

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic
    };

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


    const options = [
        {
            value: "option1", label: "Priority 1", iconClass: "text-red",
        },
        {
            value: "option2", label: "Priority 2", iconClass: "text-green",
        },
        {
            value: "option3", label: "Priority 3", iconClass: "text-blue",
        },
        {
            value: "option4", label: "Priority 4", iconClass: "text-white",
        },
    ];

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
        <div className='flex flex-col justify-between border-2 rounded-xl border-lightGrey w-full mt-80'>
            <input type="text" placeholder='TITLE'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="px-4 py-2 border-b-2 rounded-t-xl border-lightGrey shadow-md focus:outline-none"
                name='title'
                ref={titleRef}
                onFocus={() => scrollToRef(titleRef)}
            />
            <textarea
                className="w-full px-4 py-2 text-black focus:outline-none focus:border-navBlue"
                rows="4"
                placeholder="Enter your text here"
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
                ref={textAreRef}
                onFocus={() => scrollToRef(textAreRef)}
            />
            {/* date */}
            <div className="flex border-2 text-greyB border-grey hover:bg-silver mb-2 mx-3 focus:bg-silver w-32 rounded-xl items-center justify-center ">
                <span className='mt-1 text-center pointer-events-none outline-none'> <MdDateRange /> </span>
                <div className="w-24 rounded-lg">
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
                        className="text-center w-24 hover:bg-silver bg-transparent caret-transparent text-sm font-medium  focus:outline-none  cursor-pointer"
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
            {/* select */}
            <div className="flex flex-col space-y-2">
                <select
                    id="options"
                    name="options"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    <option value="">Priority</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.icon && (
                                <span className={`mr-2 text-red`}>
                                    {option.icon}
                                </span>
                            )
                            }
                            {option.label}
                        </option>
                    ))}
                </select>
                {/* {selectedOption && (
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    </div>
                )} */}
            </div>

            {/* select */}

            <div className='flex items-center justify-between border-t-2 border-lightGrey px-2'>
                <span>projects</span>
                <div className='flex items-center'>
                    <AiOutlineClose className='w-8 h-8 rounded-lg p-[6px] cursor-pointer hover:bg-lightGrey text-metal' onClick={() => { setAddTask(false), setHoverTask(false) }} />
                    <IoMdSend className='w-8 h-8 rounded-lg p-[6px] cursor-pointer opacity-90 hover:opacity-100  border-2 bg-darkRed text-white'
                        onClick={() => {
                            {
                                setAllJobs(oldArray => [...oldArray, { id: key, email: textAreaValue, title: title, date: getSelectedDate(selectedDate) }])
                                setTitle('')
                                setAddTask(false)
                                setHoverTask(false)
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Create