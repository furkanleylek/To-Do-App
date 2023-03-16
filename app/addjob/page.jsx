import React from 'react'
import AddJob from '@/components/sidebar/addJob'
import Create from '@/components/crud/create'
import Link from 'next/link'
function AddJobPage() {
    return (
        <div className='border-2 w-full h-screen'>
            <div className='mx-4 mt-4'>
                <h3>Add Job</h3>
                <Create />
                <Link href="/">Main</Link>
            </div>
        </div>
    )
}

export default AddJobPage