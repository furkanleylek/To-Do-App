import React from 'react'

function Delete({ allJobs, setAllJobs, deletedId }) {

    const removeId = () => {
        setAllJobs((current) =>
            current.filter((e) => e.id !== deletedId))
    }

    return (
        <div>
            <button className='border-2 p-2 rounded-xl' onClick={removeId}>
                Delete
            </button>
        </div>
    )
}

export default Delete