'use client'
import React, { createContext, useState, useContext } from 'react'

const Context = createContext()


function Provider({ children }) {

    const [allJobs, setAllJobs] = useState([
        { id: 1, email: "asdadads@hotmail.com", title: "main", date: "01.01.01", priority: 0 }
    ])

    const data = {
        allJobs,
        setAllJobs,
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider

export const useCrudContext = () => useContext(Context)