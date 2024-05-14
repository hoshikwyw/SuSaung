import React from 'react'
import NavBtn from './components/NavBtn'

const Navbar = () => {
  return (
    <div className=' '>
      <div className=' flex justify-center items-center'>
        <img src="/logo.png" alt="" className=' w-14 h-14' />
        <h1 className=" logoText">SuSaung</h1>
      </div>
      <div className=' flex flex-col gap-3 py-3'>
        <NavBtn icon="hehe" text="home" />
        <NavBtn icon="hehe" text="home" />
        <NavBtn icon="hehe" text="home" />
        <NavBtn icon="hehe" text="home" />
      </div>
    </div>
  )
}

export default Navbar
