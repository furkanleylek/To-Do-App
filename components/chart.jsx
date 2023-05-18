import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Task Chart',
            className: 'text-20px'
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



function Chart({ doneTasks, pendingTasks }) {

    const dateDoneTasks = doneTasks.map((e) => {
        const date = new Date(e.createdAt)
        const monthIndex = date.getMonth()
        return monthIndex
    })
    const datePendingTasks = pendingTasks.map((e) => {
        const date = new Date(e.date)
        const monthIndex = date.getMonth()
        return monthIndex
    })

    const data = {
        labels,
        datasets: [
            {
                label: 'Done',
                data: ['1', '2', '3', '4'],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: 'Pending',
                data: ['5', '6', '7', '8'],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
                hoverBorderColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };
    return (
        <div className='w-full h-full min-w-[200px] min-h-[300px] max-h-[400px] border-4'>
            <div className='w-full h-full'>
                <Bar options={options} data={data} />
            </div>
        </div>
    )
}

export default Chart