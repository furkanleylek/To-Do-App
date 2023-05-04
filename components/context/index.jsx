'use client'
import React, { createContext, useState, useEffect, useContext } from 'react'
const Context = createContext()


function Provider({ children }) {

    const [allJobs, setAllJobs] = useState([])  // show datas
    const [currentData, setCurrentData] = useState([]) // hold old datas when searching
    const [doneTasks, setDoneTasks] = useState([]) // when a task is checked , the data will be stored for 7 seconds
    const [addTask, setAddTask] = useState(false) // to add new task
    const [checkMaxDescLength, setCheckMaxDescLength] = useState(false) // read-more, read-less
    const [countDoneTasks, setCountDoneTasks] = useState(0) // for stats checked tasks
    const [isLoadingShow, setIsLoadingShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [sortBy, setSortBy] = useState("date"); // default date
    const [search, setSearch] = useState('') // for searching
    const data = {
        allJobs,
        setAllJobs,
        currentData,
        setCurrentData,
        addTask,
        setAddTask,
        checkMaxDescLength,
        setCheckMaxDescLength,
        doneTasks,
        setDoneTasks,
        countDoneTasks,
        setCountDoneTasks,
        isLoadingShow,
        setIsLoadingShow,
        loading,
        setLoading,
        sortBy,
        setSortBy,
        search,
        setSearch
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider

export const useCrudContext = () => useContext(Context)