'use client'
import React, { useState } from 'react'
import { useCrudContext } from '@/components/context';
import { MdDelete } from 'react-icons/md'

function Delete({ deletedId }) {

    const { setAllJobs } = useCrudContext();

    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

    const removeId = async () => {
        setAllJobs((current) =>
            current.filter((e) => e.id !== deletedId))
        try {
            await fetch(`/api/tasks`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: deletedId,
                })
            })

        } catch (error) {
            console.log("Error:", error)
        }
    }
    return (
        <div className='flex'>
            <button className='rounded-xl' onClick={() => setIsOpenDeleteModal(true)}>
                <MdDelete className='text-red text-xl opacity-70 hover:opacity-100' />
            </button>
            {isOpenDeleteModal ? (
                <div className="fixed z-50 inset-0 overflow-y-auto after:content[''] after:opacity-70 after:w-full after:h-full after:bg-black after:fixed after:inset-0  ">
                    <div className="flex items-center justify-center min-h-screen ">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        <div className="bg-white opacity-100 relative z-50 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                            <div className="flex items-center justify-center gap-2 px-4 py-8 sm:px-6 sm:py-12 border-b-4">
                                <MdDelete className='text-red text-2xl ' />
                                <span className="text-greyBlue text-xl font-bold text-center font-base">
                                    Are you sure you want to delete this task?
                                </span>
                            </div>
                            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    className="mt-3 w-full rounded-md opacity-90 hover:opacity-100 border shadow-sm px-4 py-2 bg-red text-white text-base font-medium"
                                    onClick={() => { setIsOpenDeleteModal(false), removeId() }}
                                >
                                    Delete
                                </button>
                                <button
                                    className="mt-3  w-full inline-flex justify-center rounded-md opacity-90 hover:opacity-100 border shadow-sm px-4 py-2 bg-grey text-white text-base font-medium   "
                                    onClick={() => setIsOpenDeleteModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>

    )
}

export default Delete