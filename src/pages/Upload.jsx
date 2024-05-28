import React, { useState } from 'react';
import { extractTextFromImage } from '../api/uploadApi'

const Upload = () => {
    const [imageData, setImageData] = useState()
    const [convertText, setConvertText] = useState()
    const [textArr, setTextArr] = useState()

    const handleConvert = async () => {
        if (imageData) {
            const res = await extractTextFromImage(imageData)
            setConvertText(res.result_string)
            setTextArr(res)
            console.log(textArr);
        }
    }

    return (
        <div className=' h-full flex flex-col justify-center items-center gap-10'>
            <div className=' h-[30%] w-[98%] flex flex-col justify-center items-center subBg'>
                <>
                    <input type="file" accept='image/*' onChange={(e) => setImageData(e.target.files[0])} />
                    <input type="button" value="Convert" onClick={handleConvert} />
                </>

                {imageData && <img src={URL.createObjectURL(imageData)} alt="preview" className=' w-[10%]' />}
            </div>
            <div className=' h-[70%] w-[98%] flex justify-center items-center subBg'>
                <p>{convertText}</p>
            </div>
        </div>
    );
}

export default Upload;


