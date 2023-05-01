'use client'
import { useState, useEffect, useRef } from "react"
import { AiFillCloseCircle, AiOutlineSearch } from 'react-icons/ai'

// import { fetchWantedGifs, fetchWantedStickers } from "@/services";
// import { useContextGif } from "./context";
import { useCrudContext } from "../context"

const Search = () => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null)
    const { allJobs, currentData, setAllJobs, search, setSearch } = useCrudContext()
    // const { setWantedGifs, setWantedStickers, search, setSearch, setIsLoading, offSet } = useContextGif()

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
            <div className="relative gap-2 w-full max-w-[800px]">
                <input
                    className={`${isFocused ? 'bg-white text-greyBlue' : 'bg-white shadow-md'} pl-10 italic text-base font-semibold py-2 px-10 w-full m-auto h-10 rounded-md focus:outline-none focus:ring-2 transition duration-200 ease-in-out`}
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
                <AiOutlineSearch className="absolute top-0 left-2 h-full flex text-grey items-center justify-center text-2xl  cursor-default pointer-events-none " />
            </div>

        </>

    );
}

export default Search