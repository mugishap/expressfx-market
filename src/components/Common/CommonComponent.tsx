import React, { ReactNode, useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { CommonContext } from '../../context'
import MobileNavbar from '../Navbar/MobileNavbar'

const CommonComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { showMenu } = useContext(CommonContext)
    return (
        <div className='w-full bg-black text-white min-h-screen flex flex-col items-center justify-between relative'>
            {showMenu && <MobileNavbar />}
            <Navbar />
            <div className='w-full'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default CommonComponent