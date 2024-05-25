import React from 'react'
import Welcome from '../components/Welcome'

const Home = () => {
    return (
        <div className=' flex flex-col w-full h-full justify-start items-start px-3'>
            <div className="">
                <Welcome />
            </div>
        </div>
    )
}

export default Home
