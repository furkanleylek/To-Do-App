'use client'
import React, { useState, useEffect } from 'react'
import ClientOnly from '../clientOnly'
import { useCrudContext } from '@/components/context';
import TaskForm from './taskForm';
import UndoModal from '../modals/undoModal';
import TaskSkelaton from '../skelaton';
import Search from './search';
import Sort from './sort';
import { SortOption } from './sort';
import { FaExclamationCircle } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'

function HomeComponent() {
    const [shouldRender, setShouldRender] = useState(true);
    const { allJobs, search, setCurrentData, setAllJobs, addTask, setAddTask, doneTasks, loading, setLoading } = useCrudContext();
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
                setAllJobs(data) // to show task datas
                setCurrentData(data) // hold old datas when searching , instead of again get request
            } catch (error) {
                console.error(error);
            }
        }
        handleData()
    }, [])

    useEffect(() => {
        setShouldRender(!shouldRender)
        console.log("rendered")
        console.log(allJobs)
    }, [allJobs])


    return (
        <ClientOnly >
            {
                loading
                    ?
                    <TaskSkelaton count={8} />
                    :
                    <div className='flex flex-col items-center justify-center w-full '>
                        <div className={`w-full flex flex-col tiny:flex-row relative items-center justify-between gap-8 my-4 border-b-2 border-line pb-6`}>
                            <Search />
                            <div className='flex items-center gap-1'>
                                <SortOption />
                                <button className='flex items-center  justify-center text-center gap-2 opacity-80 hover:opacity-100 bg-secondary rounded-md p-2 px-3 sm:px-4 '
                                    onClick={() => setAddTask(true)}
                                >
                                    <AiOutlinePlus className="text-accent text-base sm:text-xl" />
                                    <span className='text-sm text-accent font-bold '>New</span>
                                </button>
                            </div>
                        </div>

                        <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-3'>
                            {
                                addTask && (
                                    <TaskForm />
                                )
                            }
                            {
                                allJobs.length > 0
                                    ?
                                    <Sort />
                                    :
                                    (
                                        search.length > 0
                                            ?
                                            (
                                                !addTask &&
                                                <div className='flex flex-col left-0 right-0 gap-4 items-center justify-center top-1/2 absolute'>
                                                    <span className='text-xl sm:text-2xl md:text-3xl text-greyBlue font-bold italic text-center px-2'>Your search did not match any tasks</span>
                                                    <FaExclamationCircle className='text-3xl md:text-5xl text-secondary' />
                                                </div>
                                            )
                                            :
                                            (
                                                !addTask &&
                                                <div className='flex flex-col left-0 right-0 gap-8 items-center justify-center top-1/2 absolute'>
                                                    <span className='text-xl sm:text-2xl md:text-3xl text-greyBlue font-bold italic text-center px-2'>You have not created any tasks yet</span>
                                                    <button className='flex items-center  justify-center text-center gap-2 opacity-80 hover:opacity-100 bg-secondary shadow-md hover:scale-105 rounded-md p-2 md:p-[10px] px-4 '
                                                        onClick={() => setAddTask(true)}
                                                    >
                                                        <AiOutlinePlus className="text-white text-2xl md:text-3xl" />
                                                        <span className='text-base md:text-xl text-accent font-bold '>New Task</span>
                                                    </button>
                                                </div>
                                            )
                                    )
                            }
                            {
                                doneTasks.map((e) => (
                                    <React.Fragment key={e.id}>
                                        {
                                            e.isCheck && (
                                                <UndoModal doneId={e.id} key={e.id} checkedIndex={e.checkedIndex} singleDesc={e.desc} singleTitle={e.title} singleDate={e.date} isImportant={e.isImportant} isUpdate={e.isUpdate} isCheck={e.isCheck} />
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