'use client'
import React, { useEffect } from 'react'
import { redirect } from 'next/navigation'

function CheckLogin() {

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('currentId')) == undefined) {
            redirect('/landing')
        }
    }, [])

}

export default CheckLogin