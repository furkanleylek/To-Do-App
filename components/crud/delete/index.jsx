'use client'
import React from 'react'
import { useCrudContext } from '@/components/context';
import { MdDelete } from 'react-icons/md'
function Delete({ deletedId }) {

    const { allJobs, setAllJobs } = useCrudContext();

    const removeId = () => {
        setAllJobs((current) =>
            current.filter((e) => e.id !== deletedId))
    }

    return (
        <button className='rounded-xl' onClick={removeId}>
            <MdDelete className='text-red text-xl opacity-70 hover:opacity-100' />
        </button>
    )
}

export default Delete