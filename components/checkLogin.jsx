'use client'
import React, { useEffect } from 'react'
import { redirect } from 'next/navigation'
import { useCrudContext } from './context'
function CheckLogin() {

    const { isLogin } = useCrudContext()

    useEffect(() => {
        if (JSON.parse(window.localStorage.getItem('currentId')) == undefined) {
            redirect('/landing')
        }
    }, [])
    // if (!isLogin) {
    //     redirect('/landing')
    // }

}

export default CheckLogin