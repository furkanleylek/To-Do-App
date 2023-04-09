import React from 'react'
import Login from './login'
import OutsideClickHandler from 'react-outside-click-handler'

function LoginModal({ login, setLogin, }) {


    return (
        <div className="fixed w-full h-full flex justify-center items-center inset-0
    after:content[''] after:opacity-50 after:w-full after:h-full after:bg-black after:fixed after:inset-0 z-50 overflow-y-auto
    ">
            <OutsideClickHandler onOutsideClick={() => setLogin(false)} display="contents">
                <div className='shadow-modal w-full exsm:w-[70%] sm:w-[50%] lg:w-[40%] max-w-[450px] animate-modal overflow-y-hidden rounded h-full max-h-[600px] bg-[#F1F1E8]  opacity-10 relative z-50'>
                    {login && (
                        < Login setLogin={setLogin} />
                    )}
                </div>
            </OutsideClickHandler>
        </div>
    )
}

export default LoginModal

