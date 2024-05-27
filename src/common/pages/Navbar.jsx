import React from 'react'
import NavBtn from '../components/NavBtn'

const Navbar = () => {
  return (
    <div className=' py-3 subBg flex flex-col w-full justify-start items-start px-3 h-full'>
      <div className=' flex justify-center items-center gap-2 border-b border-gray-500 pb-3 w-full'>
        <img src="/logo.png" alt="" className=' w-14 h-14' />
        <h1 className=" logoText">SuSaung</h1>
      </div>
      <div className=' flex flex-col gap-3 p-5'>
        <NavBtn icon="/icons/home.svg" text="home" to="/" />
        <NavBtn icon="/icons/home.svg" text="about" to="/about" />
        <NavBtn icon="/icons/home.svg" text="gallery" to="/gallery" />
        <NavBtn icon="/icons/home.svg" text="lists" to="/lists" />
        <NavBtn icon="/icons/home.svg" text="Upload Img" to="/uploadImg" />
      </div>
    </div>
  )
}

export default Navbar
