'use client'
import React from 'react'
function Loading() {
    console.log("sa")
    return (

        <div className={`fixed md:w-[calc(100%-192px)] lg:w-[calc(100%-240px)] m-auto h-full flex justify-center items-center inset-0
            after:content[''] after:opacity-20 md:after:w-[calc(100%-192px)] lg:after:w-[calc(100%-240px)] after:h-full md:after:left-[192px] lg:after:left-[240px] after:bg-lightGrey after:fixed after:inset-0 z-50 overflow-y-auto
            `}>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ">
                <span className="loader"></span>
            </div>
        </div >
    )
}

export default Loading