'use client'
import React, { useEffect } from 'react'
import { useCrudContext } from '@/components/context';
import { AiOutlineClose } from 'react-icons/ai'

function UndoModal({ doneId, checkedIndex, singleEmail, singleTitle, singleDate, isImportant, isUpdate, isCheck }) {
    const { doneTasks, setDoneTasks, allJobs, setAllJobs } = useCrudContext();

    function arrangeDoneCheck() {
        setDoneTasks(
            doneTasks.map((task) => {
                return task.id == doneId ? { ...task, isCheck: false } : task;
            })
        )
    }
    function undoTask() {

        setAllJobs(prevTasks => {
            const tasks = [...prevTasks]
            tasks.splice(checkedIndex, 0, { id: doneId, email: singleEmail, title: singleTitle, date: singleDate, important: isImportant, isUpdate: isUpdate, isCheck: true })
            return tasks
        })

        setDoneTasks((done) =>
            done.filter((e) => e.id !== doneId))
    }

    useEffect(() => {
        let timeout;
        if (isCheck) {
            timeout = setTimeout(() => {
                arrangeDoneCheck()
            }, 7000);
        }
        return () => clearTimeout(timeout);
    }, [isCheck]);

    return (
        <>
            {isCheck && (
                <div className="flex items-center z-50 text-sm justify-center fixed bottom-0 left-0 ml-6 mb-8 px-3 py-2 gap-2 bg-[#2B2D26] rounded-xl text-white animate-buttonLeftToRight transition-all duration-300 ease-in-out shadow-lg ">
                    <span>1 task completed
                    </span>
                    <button
                        className='text-lightRed hover:bg-grey p-2 rounded'
                        onClick={() => { arrangeDoneCheck(), undoTask() }}
                    >
                        Undo
                    </button>
                    <button
                        className="hover:bg-grey font-bold p-2 rounded"
                        onClick={() => arrangeDoneCheck()}
                    >
                        <AiOutlineClose />
                    </button>
                </div>
            )}
        </>
    )
}

export default UndoModal