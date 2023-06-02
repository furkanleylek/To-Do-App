'use client'
import React, { useState } from 'react'
import { useCrudContext } from '../context'
import SingleTask from '../singleTask'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import OutsideClickHandler from 'react-outside-click-handler';

export function SortOption() {

    const { sortBy, setSortBy } = useCrudContext()

    const [isOpen, setIsOpen] = useState(false);
    const options = [
        { value: "date", label: "Date" },
        { value: "title", label: "Title" },
        { value: "important", label: "Important" },
    ];
    const handleOptionClick = (value) => {
        setSortBy(value);
        setIsOpen(false);
    };

    return (
        <OutsideClickHandler onOutsideClick={() => setIsOpen(false)} >
            <div className="relative inline-block text-left w-28 ">
                <div>
                    <span className="rounded-md shadow-sm">
                        <button
                            type="button"
                            className="flex items-center opacity-70 hover:opacity-100 justify-between w-full rounded-md border border-line p-2 bg-accent text-sm leading-5 font-medium text-font hover:bg-primary focus:outline-none focus:shadow-outline-blue focus:border-secondary transition duration-150 ease-in-out"
                            id="options-menu"
                            aria-haspopup="true"
                            aria-expanded="true"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span>{options.find((o) => o.value === sortBy)?.label}</span>
                            {isOpen ? (
                                <AiOutlineCaretUp className="text-base" />
                            ) : (
                                <AiOutlineCaretDown className="text-base" />
                            )}
                        </button>
                    </span>
                </div>
                <div
                    className={`${isOpen ? "absolute" : "hidden"
                        } z-10 mt-1 w-full rounded-md bg-primary shadow-lg`}
                >
                    <div className="py-1 ">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleOptionClick(option.value)}
                                className={`${sortBy === option.value
                                    ? "bg-secondary text-accent"
                                    : "text-font"
                                    } 
                                    block items-center w-full font-semibold text-left px-4 py-2 text-sm leading-5 hover:bg-secondary hover:text-accent focus:outline-none focus:bg-primary focus:text-font`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </OutsideClickHandler>
    );
}

function Sort() {

    const { allJobs, sortBy } = useCrudContext()

    const sortedJobs = allJobs.sort((a, b) => {
        if (sortBy === "date") {
            return new Date(a.date) - new Date(b.date); // sort by date
        } else if (sortBy === "title") {
            return a.title.localeCompare(b.title); // sort by title
        } else if (sortBy == "important") {
            // first sort by important
            if (a.important && !b.important) {
                return -1; // a should come first
            } else if (b.important && !a.important) {
                return 1; // b should come first
            }
            // then sort by date
            return new Date(a.date) - new Date(b.date);
        }
    });
    console.log(sortedJobs)
    return (
        <>

            {
                sortedJobs.map((e) => (
                    <div key={e.id} className="flex flex-col justfiy-center items-center w-full">
                        <SingleTask key={e.id} singleId={e.id} singleDesc={e.desc} singleTitle={e.title} singleDate={e.date} isImportant={e.important} isUpdate={e.isUpdate} isCheck={e.isCheck} />
                    </div>
                ))
            }
        </>
    );
}

export default Sort