import React from 'react'
import Welcome from '../components/homePageComponents/Welcome'
import Chart from '../components/homePageComponents/Chart'
import Table from '../components/homePageComponents/Table'

const Home = () => {
    return (
        <div className=' flex flex-col w-full h-full justify-start items-start px-3 gap-3'>
            <div className=" flex gap-3">
                <Welcome />
                <Table />
            </div>
            <div>
                <Chart />
            </div>
        </div>
    )
}

export default Home
