'use client'
import React, { useState } from 'react'
import Delete from './crud/delete'
import Update from './crud/update'
function SingleTask({ singleId, singleEmail, singleTitle, singleDate }) {

    const [showUpDelete, setShowUpDelete] = useState(false)
    return (
        <div className='flex flex-col justify-center border-2 rounded-xl border-lightGrey bg-white w-full p-2 my-4 shadow-md' onMouseOver={() => setShowUpDelete(true)} onMouseLeave={() => setShowUpDelete(false)}>
            <div className='flex items-center h-8 justify-between'>
                <h5 className='text-lg text-navBlue font-bold'>{singleTitle}</h5>
                {showUpDelete &&
                    <div className="flex">
                        <Delete deletedId={singleId} />
                        <Update updateId={singleId} />
                    </div>
                }
            </div>
            <h5 className='h-8'>{singleEmail}</h5>
            <h5 className='h-8'>{singleDate}</h5>

        </div>
    )
}

export default SingleTask