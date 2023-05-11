import React, { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const CommonComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className='w-full bg-black text-white min-h-screen flex flex-col items-center justify-between'>
            <Navbar />
            <div className='w-full min-h-[calc(100vh_-_30vh)]'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default CommonComponent