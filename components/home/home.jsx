'use client'
import React, { useState } from 'react'
import ClientOnly from '../clientOnly'
import Link from 'next/link'
import { useCrudContext } from '@/components/context';
import SingleTask from '../singleTask'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { IoMdSend } from 'react-icons/io'
import TaskForm from './taskForm';

function HomeComponent() {

    const { allJobs, setAllJobs } = useCrudContext();
    const [hoverTask, setHoverTask] = useState(false)
    const [addTask, setAddTask] = useState(false)

    console.log("sa")
    return (
        <ClientOnly>
            {
                allJobs.map((e) => (
                    <div key={e.id} className="flex flex-col justfiy-center items-center">
                        <SingleTask singleId={e.id} singleEmail={e.email} singleTitle={e.title} singleDate={e.date} />
                    </div>
                ))
            }
            {
                !addTask && (
                    <button className='flex justify-start items-center gap-3 py-4'
                        onMouseOver={() => setHoverTask(true)}
                        onMouseLeave={() => setHoverTask(false)}
                        onClick={() => setAddTask(true)}
                    >
                        <AiOutlinePlus className={hoverTask ? `bg-darkRed rounded-full cursor-pointer text-white text-xl` : `pointer-events-none text-red text-xl`} />
                        <span className={hoverTask ? `text-red` : `text-grey`}>Add Task</span>
                    </button>
                )
            }
            {
                addTask && (
                    <TaskForm addTask={addTask} setAddTask={setAddTask} setHoverTask={setHoverTask} />
                )
            }
        </ClientOnly>
    )
}

export default HomeComponent