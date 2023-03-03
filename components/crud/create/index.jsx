import React, { useContext } from 'react'
import Delete from '../delete';
import { Context } from '@/components/context';
function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.random() * n);
    }
    return retVal;
}

function Create({ allJobs, setAllJobs }) {

    const jobs = useContext(Context)
    console.log(jobs)
    let key = generatePassword()

    return (
        <div>
            <button className='border-2 p-2 rounded-xl' onClick={() => setAllJobs(oldArray => [...oldArray, { id: key, title: 'başlıyoruz', date: 'now' }])}>Create</button>
            {
                allJobs.map((e) => (
                    <div key={e.id} className="flex flex-col justfiy-center items-center border-2 border-red ">
                        <h5>{e.id}</h5>
                        <h5>{e.title}</h5>
                        <h5>{e.date}</h5>
                        <Delete allJobs={allJobs} setAllJobs={setAllJobs} deletedId={e.id} />
                    </div>
                ))
            }
        </div>
    )
}

export default Create