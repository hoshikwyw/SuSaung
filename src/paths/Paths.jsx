import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../common/pages/Home'
import Profile from '../pages/Profile'
import Upload from '../pages/Upload'

const Paths = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/uploadImg' element={<Upload />} />
            </Routes>
        </>
    )
}

export default Paths
