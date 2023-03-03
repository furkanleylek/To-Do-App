'use client'
import React, { useState } from 'react'
import Create from '../crud/create'
import ClientOnly from '../clientOnly'
import Link from 'next/link'


function HomeComponent() {
    const [allJobs, setAllJobs] = useState([])
    return (
        <ClientOnly>
            <Link href='/addjob'>
                <button className='border-2 rounded-xl p-2'>add job</button>
            </Link>
            <div>
                <Create allJobs={allJobs} setAllJobs={setAllJobs} />
            </div>
        </ClientOnly>
    )
}

export default HomeComponent