'use client'
import React, { useEffect } from 'react'
import { useCrudContext } from '@/components/context';
import { AiOutlineClose } from 'react-icons/ai'
import { getCookie } from 'cookies-next'

function UndoModal({ doneId, checkedIndex, singleDesc, singleTitle, singleDate, isImportant, isUpdate, isCheck }) {
    const { doneTasks, setDoneTasks, setAllJobs, setCurrentData, setCountDoneTasks } = useCrudContext();

    function arrangeDoneCheck() {
        setDoneTasks(
            doneTasks.map((task) => {
                return task.id == doneId ? { ...task, isCheck: false } : task;
            })
        )
    }
    useEffect(() => {
        window.token = getCookie('token')
    }, [])
    async function deleteFromDatabase() {
        try {
            await fetch(`/api/tasks`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: doneId,
                })
            })

        } catch (error) {
            console.log("Error:", error)
        }
    }
    async function postDoneTasks() {
        try {
            await fetch(`/api/done`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: token,
                    doneTasks: doneId,
                })
            })

        } catch (error) {
            console.log("Error:", error)
        }
    }
    function undoTask() {

        setAllJobs(prevTasks => {
            const tasks = [...prevTasks]
            tasks.splice(checkedIndex, 0, { id: doneId, desc: singleDesc, title: singleTitle, date: singleDate, important: isImportant, isUpdate: isUpdate, isCheck: true })
            return tasks
        })
        setCurrentData(prevTasks => {
            const tasks = [...prevTasks]
            tasks.splice(checkedIndex, 0, { id: doneId, desc: singleDesc, title: singleTitle, date: singleDate, important: isImportant, isUpdate: isUpdate, isCheck: true })
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
                postDoneTasks()
                deleteFromDatabase()
            }, 7000);
        }
        return () => clearTimeout(timeout);
    }, [isCheck]);


    return (
        <>
            {isCheck && (
                <div className="flex items-center z-50 text-sm justify-center fixed bottom-0 left-0 ml-6 mb-8 px-3 py-2 gap-2 bg-font rounded-xl text-fontSecond animate-buttonLeftToRight transition-all duration-300 ease-in-out shadow-lg   ">
                    <span>1 task completed
                    </span>
                    <button
                        className='text-lightRed hover:bg-hover p-2 rounded'
                        onClick={() => { arrangeDoneCheck(), undoTask(), setCountDoneTasks((prev) => prev - 1) }}
                    >
                        Undo
                    </button>
                    <button
                        className="hover:bg-hover hover:text-font font-bold p-2 rounded"
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