import React from 'react'

const NavBtn = ({icon , text}) => {
    return (
        <div className=' flex gap-3 items-center px-10'>
            <h1 className="icon">{icon}</h1>
            <h1 className="text">{text}</h1>
        </div>
    )
}

export default NavBtn
