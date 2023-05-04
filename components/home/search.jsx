'use client'
import { useState, useEffect, useRef } from "react"
import { AiFillCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { useCrudContext } from "../context"

const Search = () => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null)
    const { allJobs, currentData, setAllJobs, search, setSearch } = useCrudContext()

    useEffect(() => {
        if (search.length > 0) {
            const searchingTasks = currentData.filter((task) => {
                return task.title.toLowerCase().includes(search.toLowerCase())
            })
            setAllJobs(searchingTasks)
        }
        else if (search.length == 0) {
            setAllJobs(currentData)
        }
    }, [search])

    return (
        <>
            <div className={`w-full  relative gap-2 max-w-[800px]`}>
                <input
                    className={`${isFocused ? 'bg-accent text-font mr-[500px]  sm:mr-0' : 'bg-accent shadow-md'}  italic text-base font-semibold py-2 px-10 w-full m-auto h-10 rounded-md focus:outline-none focus:ring-2 transition duration-200 ease-in-out`}
                    type="text"
                    value={search}
                    ref={inputRef}
                    placeholder={`${isFocused ? "" : " Search all tasks by title"}`}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(event) => setSearch(event.target.value)}
                />
                {search.length > 0 && (
                    <button
                        className="absolute top-0 right-6 h-full flex items-center justify-center z-10 hover:scale-105"
                        onClick={() => {
                            inputRef.current.focus();
                            setSearch('')
                        }}
                    >
                        <AiFillCloseCircle className="text-2xl z-10 text-greyBlue" />
                    </button>
                )}
                <AiOutlineSearch className="absolute top-0 left-2 h-full flex text-line items-center justify-center text-2xl  cursor-default pointer-events-none " />
            </div>

        </>

    );
}

export default Search