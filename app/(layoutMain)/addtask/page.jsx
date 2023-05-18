import React, { Suspense } from 'react'
import Create from '@/components/crud/create'
import Link from 'next/link'
import LoadingComponent from '@/components/loading'
function AddJobPage() {
    return (
        <Suspense fallback={<LoadingComponent />}>
            <div className='border-2 w-full h-screen'>
                <div className='mx-4 mt-4'>
                    <Create />
                    <Link href="/">Main</Link>
                </div>
            </div>
        </Suspense>
    )
}

export default AddJobPage