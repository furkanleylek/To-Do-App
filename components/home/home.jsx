'use client'
import React, { useState, useEffect } from 'react'
import ClientOnly from '../clientOnly'
import Link from 'next/link'
import { useCrudContext } from '@/components/context';
import SingleTask from '../singleTask'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { IoMdSend } from 'react-icons/io'
import TaskForm from './taskForm';
import UndoModal from '../modals/undoModal';
import TaskSkelaton from '../skelaton';
function HomeComponent() {
    const { allJobs, setAllJobs, hoverTask, setHoverTask, addTask, setAddTask, doneTasks, loading, setLoading } = useCrudContext();
    useEffect(() => {
        setLoading(true);
        async function handleData() {
            try {
                const response = await fetch('/api/tasks', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const data = await response.json();
                console.log("GET:", data);
                setLoading(false);
                setAllJobs(data)
            } catch (error) {
                console.error(error);
            }
        }
        handleData()
    }, [])
    return (
        <ClientOnly >
            {loading
                ?
                <TaskSkelaton count={8} />
                :
                <div className='flex flex-col items-center justify-center m-auto w-full'>
                    <div className='w-full max-w-xl '>
                        {
                            allJobs.map((e) => (
                                <div key={e.id} className="flex flex-col justfiy-center items-center w-full mt-2 ">
                                    <SingleTask key={e.id} singleId={e.id} singleDesc={e.desc} singleTitle={e.title} singleDate={e.date} isImportant={e.important} isUpdate={e.isUpdate} isCheck={e.isCheck} />
                                </div>
                            ))
                        }
                        {
                            !addTask && (
                                <div className='flex flex-col w-full h-full mb-[200px]'>
                                    <span className='border-t-2 border-lightGrey w-full h-1 mt-2' ></span>
                                    <button className='flex justify-start items-center gap-3 py-4 w-[100px]'
                                        onMouseOver={() => setHoverTask(true)}
                                        onMouseLeave={() => setHoverTask(false)}
                                        onClick={() => setAddTask(true)}
                                    >
                                        <AiOutlinePlus className={hoverTask ? `bg-darkRed rounded-full cursor-pointer text-white text-xl` : `pointer-events-none text-red text-xl`} />
                                        <span className={hoverTask ? `text-red` : `text-grey`}>Add Task</span>
                                    </button>
                                </div>
                            )
                        }
                        {
                            addTask && (
                                <TaskForm />
                            )
                        }
                        {
                            doneTasks.map((e) => (
                                <React.Fragment key={e.id}>
                                    {
                                        e.isCheck && (
                                            <UndoModal doneId={e.id} key={e.id} checkedIndex={e.checkedIndex} singleEmail={e.email} singleTitle={e.title} singleDate={e.date} isImportant={e.important} isUpdate={e.isUpdate} isCheck={e.isCheck} />
                                        )
                                    }
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            }
        </ClientOnly>
    )
}

export default HomeComponent