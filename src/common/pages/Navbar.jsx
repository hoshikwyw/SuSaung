import React from 'react'
import NavBtn from '../components/NavBtn'

const Navbar = () => {
  return (
    <div className=' py-3'>
      <div className=' flex justify-center items-center gap-2'>
        <img src="/logo.png" alt="" className=' w-14 h-14' />
        <h1 className=" logoText">SuSaung</h1>
      </div>
      <div className=' flex flex-col gap-3 py-3'>
        <NavBtn icon="/icons/home.svg" text="home" />
        <NavBtn icon="hehe" text="about" />
        <NavBtn icon="hehe" text="gallery" />
        <NavBtn icon="hehe" text="lists" />
      </div>
    </div>
  )
}

export default Navbar
