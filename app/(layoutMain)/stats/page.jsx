'use client'
import React, { useState, useEffect } from 'react'
import { useCrudContext } from '@/components/context';
import { TiTick } from 'react-icons/ti'
import Chart from '@/components/chart';
function Stats() {

  const { countDoneTasks, setCountDoneTasks, allJobs, setAllJobs, setLoading } = useCrudContext();
  const [doneTasks, setDoneTasks] = useState([])
  const [pendingTasks, setPendingTasks] = useState([])
  useEffect(() => {
    async function getDoneTasks() {
      try {
        const response = await fetch('/api/done', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const data = await response.json();
        setCountDoneTasks(data.length)
        return data
      } catch (error) {
        console.error(error);
      }
    }
    async function getPendingTasks() {
      try {
        const response = await fetch('/api/tasks', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const data = await response.json();
        return data
      } catch (error) {
        console.error(error);
      }
    }
    async function getAll() {
      const pagePromises = [
        getDoneTasks(),
        getPendingTasks()
      ]
      const [doneTasks, pendingTasks] = await Promise.all(pagePromises)
      console.log("doneTasks:", doneTasks)
      console.log("pendingTasks:", pendingTasks)
      setDoneTasks(doneTasks)
      setPendingTasks(pendingTasks)
    }
    getAll()
  }, [])


  return (
    <div className='flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 md:mt-16'>
      <div className='flex flex-col justify-between border-[3px] border-line shadow-md  bg-white w-full md:max-w-md h-40 p-8'>
        <div className='flex items-center justify-between'>
          <span>{countDoneTasks}</span>
          <TiTick />
        </div>
        <h4>Done Tasks</h4>
      </div>
      <div className='flex flex-col justify-between border-[3px] border-lightGrey shadow-md  bg-white w-full md:max-w-md h-40 p-8'>
        <div className='flex items-center justify-between'>
          <span>{pendingTasks.length}</span>
          <TiTick />
        </div>
        <h4>Pending Tasks</h4>
      </div>
      <Chart doneTasks={doneTasks} pendingTasks={pendingTasks} />
    </div>
  );
}

export default Stats