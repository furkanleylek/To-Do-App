'use client'
import React, { createContext, useState, useContext } from 'react'

const Context = createContext()


function Provider({ children }) {

    const [allJobs, setAllJobs] = useState([
        { id: 1, email: "asdadads@hotmail.com", title: "main", date: "01.01.01", important: false, isUpdate: false }
    ])
    const [hoverTask, setHoverTask] = useState(false)
    const [addTask, setAddTask] = useState(false)
    const [checkMax, setCheckMax] = useState(false)

    const data = {
        allJobs,
        setAllJobs,
        hoverTask,
        setHoverTask,
        addTask,
        setAddTask,
        checkMax,
        setCheckMax
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider

export const useCrudContext = () => useContext(Context)