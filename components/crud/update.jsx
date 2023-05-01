import React from 'react'
import { useCrudContext } from '@/components/context';
import { HiPencilAlt } from 'react-icons/hi'

function Update({ updateId }) {

    const { allJobs, setAllJobs } = useCrudContext();

    const allIds = allJobs.map((e) => { return e.id })

    const idIndex = allIds.findIndex((e) => { return e == updateId })

    const update = async () => {
        setAllJobs(
            allJobs.map((job) => {
                return job.id == updateId ? { ...job, isUpdate: true } : job;
            })
        )
        
    }

    return (
        <button className='rounded-xl' onClick={update}>
            <HiPencilAlt className='text-xl text-green opacity-70 hover:opacity-100' />
        </button>
    )
}

export default Update