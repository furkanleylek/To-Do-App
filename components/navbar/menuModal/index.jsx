import React from 'react'
import Menu from '../menu'
import OutsideClickHandler from 'react-outside-click-handler'

function MenuModal({ setMenu }) {
    return (
        <div className="fixed w-full h-full md:hidden flex justify-center items-center inset-0
        after:content[''] after:w-full after:opacity-50 after:h-full after:bg-black after:fixed  after:inset-0
        ">
            <OutsideClickHandler onOutsideClick={() => { setMenu(false) }} display="contents">

                <div className='shadow-modal w-[460px] h-full rounded-xl bg-white opacity-100 relative z-50'>
                    <Menu setMenu={setMenu} />
                </div>
            </OutsideClickHandler>
        </div>
    )
}

export default MenuModal