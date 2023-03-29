import React from 'react'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
function CheckLogin() {

    const cookieStore = cookies()
    const hasCookie = cookieStore.has('currentId')
    if (!hasCookie) {
        redirect('/landing')
    }
}

export default CheckLogin