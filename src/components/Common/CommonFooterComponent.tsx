import React from 'react'
import { Cta } from '../../assets'

const CommonFooterComponent: React.FC = () => {
    return (
        <div style={{ background: `url(${Cta})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='z-[2] relative  w-full pt-24 pb-28 flex items-center justify-center'>
            <div className='z-[3] w-full h-full top-0 absolute bg-black/60'></div>
            <div className='flex z-[4] flex-col items-center'>
                <span className='text-3xl font-bold text-white flex'>
                    GET STARTED TODAY WITH BITCOIN
                </span>
                <span className='font-light my-4 text-xl'>Open account for free and start trading Bitcoins!</span>
                <button className='text-white w-fit text-sm mt-6 bg-orange px-6 py-3 cursor-pointer'>REGISTER NOW</button>
            </div>
        </div>
    )
}

export default CommonFooterComponent