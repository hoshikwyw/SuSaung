import React from 'react'
import navBtnclick from '../CommonFn'
import { NavLink } from 'react-router-dom'

const NavBtn = ({ icon, text, to }) => {
    return (
        <div className=' flex gap-3 items-center'>
            <img src={icon} alt="" />
            <NavLink to={to} className=" text">{text}</NavLink>
        </div>
    )
}

export default NavBtn
