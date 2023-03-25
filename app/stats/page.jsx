'use client'
import React, { useState, useEffect } from 'react'
import { useCrudContext } from '@/components/context';

function Stats() {

  const { doneTasks, setDoneTasks } = useCrudContext();
  console.log(doneTasks)
  return (
    <div>
      {
        doneTasks.map((e) => (
          <div key={e.id} className="flex flex-col justfiy-center items-center w-full">
            <h1>{e.checkedIndex}</h1>
          </div>
        ))
      }
      <div>
        <h3>doneTasks</h3>
        <span>{doneTasks.length}</span>
      </div>
    </div>
  );
}

export default Stats
