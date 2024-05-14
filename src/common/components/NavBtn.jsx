import React from 'react'
import navBtnclick from '../CommonFn'

const NavBtn = ({ icon, text }) => {
    return (
        <div className=' flex gap-3 items-center px-10'>
            <h1 className="icon">{icon}</h1>
            <button className="text" onClick={() => { navBtnclick(text) }}>{text}</button>
        </div>
    )
}

export default NavBtn
