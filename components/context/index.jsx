'use client'
import React, { createContext, useState, useEffect, useContext } from 'react'
import { getAllTasks } from '@/services/getTasks'
const Context = createContext()


function Provider({ children }) {



    const [allJobs, setAllJobs] = useState([])
    const [doneTasks, setDoneTasks] = useState([])
    const [hoverTask, setHoverTask] = useState(false)
    const [addTask, setAddTask] = useState(false)
    const [checkMaxDescLength, setCheckMaxDescLength] = useState(false)
    const [countDoneTasks, setCountDoneTasks] = useState(0)

    const [isLogin, setIsLogin] = useState(false)




    const data = {
        allJobs,
        setAllJobs,
        hoverTask,
        setHoverTask,
        addTask,
        setAddTask,
        checkMaxDescLength,
        setCheckMaxDescLength,
        doneTasks,
        setDoneTasks,
        countDoneTasks,
        setCountDoneTasks,
        isLogin,
        setIsLogin,
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider

export const useCrudContext = () => useContext(Context)