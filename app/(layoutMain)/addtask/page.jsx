import React, { Suspense } from 'react'
import Create from '@/components/crud/create'
import Link from 'next/link'
import LoadingComponent from '@/components/loading'
import TaskForm from '@/components/home/taskForm'
function AddJobPage() {
    return (
        <Suspense fallback={<LoadingComponent />}>
            <div className='border-2 w-full h-screen'>
                <Create />
            </div>
        </Suspense>
    )
}

export default AddJobPage