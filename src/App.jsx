import React from 'react'
import Navbar from './common/pages/Navbar'
import Home from './common/pages/Home'

const App = () => {
  return (
    <div className=' min-w-screen min-h-screen flex justify-center items-center mainBg'>
      <div className=' w-[98%] flex gap-10 rounded-xl border-2 border-white p-5 h-[calc(100vh-35px)]'>
        <div className=" w-[15%] p-2 rounded-xl">
          <Navbar />
        </div>
        <div className=' w-[85%] p-2 rounded-xl'>
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App
