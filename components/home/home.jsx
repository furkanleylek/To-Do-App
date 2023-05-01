'use client'
import React, { useState, useEffect } from 'react'
import ClientOnly from '../clientOnly'
import { useCrudContext } from '@/components/context';
import { AiOutlinePlus } from 'react-icons/ai'
import TaskForm from './taskForm';
import UndoModal from '../modals/undoModal';
import TaskSkelaton from '../skelaton';
import Search from './search';
import Sort from './sort';
import { SortOption } from './sort';
function HomeComponent() {
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
                setAllJobs(data)
                setCurrentData(data)
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
                <div className='flex flex-col items-center justify-center w-full '>
                    <div className='w-full flex items-center justify-between gap-8 my-4 border-b-2 border-lightGrey pb-6'>
                        <Search />
                        <div className='flex items-center gap-2'>
                            <SortOption />
                            <button className='flex items-center  justify-center text-center gap-2 opacity-80 hover:opacity-100 bg-navBlue rounded-md p-2 px-4 '
                                onClick={() => setAddTask(true)}
                            >
                                <AiOutlinePlus className="text-white text-xl" />
                                <span className='text-sm text-white font-bold '>Add</span>
                            </button>
                        </div>
                    </div>
                    <div className='w-full xl:grid grid-cols-2 gap-3'>
                        {
                            addTask && (
                                <TaskForm />
                            )
                        }
                        <Sort />
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