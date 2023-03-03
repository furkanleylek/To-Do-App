'use client'
import React, { createContext } from 'react'

export const Context = createContext()


function Provider({ children }) {

    const data = '123'

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider