import React from 'react'
function LoadingComponent() {
    return (
        <div className={`fixed w-full h-full flex justify-center items-center inset-0
        after:content[''] after:opacity-80 after:w-full after:h-full after:bg-line after:fixed after:inset-0 z-50 overflow-y-auto
        `}>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ">
                <span className="loader"></span>
            </div>
        </div >
    );
}

export default LoadingComponent