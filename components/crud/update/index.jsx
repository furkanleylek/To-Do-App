import React from 'react'

function Update() {
    const updateId = () => {
        setAllJobs((current) =>
            current.filter((e) => e.id !== deletedId))
    }

    return (
        <div>
            <button className='border-2 p-2 rounded-xl' onClick={updateId}>
                Update
            </button>
        </div>
    )
}

export default Update