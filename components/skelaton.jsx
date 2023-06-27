import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const TaskSkelaton = ({ count }) => {
    return (
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-3 h-full ">
            {[...Array(count)].map((_, index) => (
                <div key={index} className="w-full h-full border-2 p-3 flex flex-col gap-4 shadow-md">
                    <SkeletonTheme baseColor="#B5B9BE" highlightColor="#D6DADE" duration={1.7} borderRadius={6}  >
                        {/* <Skeleton circle={false} height={186} /> */}
                        <Skeleton height={25} width={240} />
                        <Skeleton height={80} />
                        <div className='flex items-center justify-between w-full'>
                            <Skeleton height={25} width={80} />
                            <Skeleton height={25} width={30} />
                        </div>
                    </SkeletonTheme>
                </div>
            ))}
        </div>
    );
};

export default TaskSkelaton;