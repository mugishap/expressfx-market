import React from 'react'
import { Banner } from '../../assets'

interface Props {
    page: string,
    yellowText: string,
    whiteText: string,
}

const CommonHeader: React.FC<Props> = ({ page, yellowText, whiteText }) => {
    return (
        <div style={{ background: `url(${Banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='z-[2] relative  w-full pt-20 pb-24 flex items-center justify-center'>
            <div className='z-[3] w-full h-full top-0 absolute bg-black/60'></div>
            <div className='flex z-[4] flex-col'>
                <span className='text-5xl font-bold text-white flex'>
                    {whiteText} &nbsp;
                    <span className='text-orange'>{yellowText}</span>
                </span>
                <div className='w-24 h-1 m-auto bg-white my-8'></div>
                <span className='flex m-auto'>
                    <span className='text-orange'>HOME</span>&nbsp; / &nbsp;<span>{page}</span>
                </span>
            </div>
        </div>
    )
}

export default CommonHeader