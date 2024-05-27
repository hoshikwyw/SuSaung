import React from 'react'

const Upload = () => {
    return (
        <div className=' h-full flex flex-col justify-center items-center gap-10'>
            <div className=' h-[30%] w-[98%] flex flex-col justify-center items-center subBg'>
                <img src="/upload.png" alt="upload.png" className=' w-[60px]' />
                <h1 className=' text-sm'>Upload Image</h1>
            </div>
            <div className=' h-[70%] w-[98%] flex justify-center items-center subBg'>
                <h1>scanning text ....</h1>
            </div>
        </div>
    )
}

export default Upload
