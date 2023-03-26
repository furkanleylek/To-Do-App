import React from 'react'
import Create from '@/components/crud/create'
import Link from 'next/link'
function AddJobPage() {
    return (
        <div className='border-2 w-full h-screen'>
            <div className='mx-4 mt-4'>
                <Create />
                <Link href="/">Main</Link>
            </div>
        </div>
    )
}

export default AddJobPage