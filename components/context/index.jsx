'use client'
import React, { createContext, useState, useContext } from 'react'

const Context = createContext()


function Provider({ children }) {

    const [allJobs, setAllJobs] = useState([
        { id: 1, email: "asdadads@hotmail.com", title: "main", date: "01.01.01", important: false, isUpdate: false, isCheck: false }
    ])
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