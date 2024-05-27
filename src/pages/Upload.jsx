import React, { useEffect, useState } from 'react'
import { createWorker } from 'tesseract.js'

const Upload = () => {
    const [ocr, setOcr] = useState("")
    const [imageData, setImageData] = useState(null)
    const worker = createWorker()

    const convertImageToText = async () => {
        if (!imageData) return;
        await worker.load();
        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        const { data: { text } } = await worker.recognize(imageData);
        setOcr(text);
    };

    useEffect(() => {
        convertImageToText()
    }, [imageData])

    const handleImgChange = (e) => {
        const file = e.target.files[0]
        if (!file) return;
        const reader = new FileReader()
        reader.onloadend = () => {
            const imageDataUrl = reader.result
            console.log({ imageDataUrl });
            setImageData(imageDataUrl)
        }
        reader.readAsDataURL(file)
    }

    return (
        <div className=' h-full flex flex-col justify-center items-center gap-10'>
            <div className=' h-[30%] w-[98%] flex flex-col justify-center items-center subBg'>
                <img src="/upload.png" alt="upload.png" className=' w-[60px]' />
                <h1 className=' text-sm'>Upload Image</h1>
                <input type="file" accept='image/*' onChange={handleImgChange} />
                {imageData && <img src={imageData} />}
            </div>
            <div className=' h-[70%] w-[98%] flex justify-center items-center subBg'>
                <h1>scanning text ....</h1>
                <p>{ocr}</p>
            </div>
        </div>
    )
}

export default Upload
