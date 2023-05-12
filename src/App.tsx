import { motion } from 'framer-motion'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './App.css'
import { SuspenseLogo } from './assets'
const Pages = React.lazy(() => import("./Pages"))

function App() {
  return (
    <React.Suspense fallback={
      <div className='w-full bg-black h-screen flex justify-center items-center'>
        <img className='' src={SuspenseLogo} alt="Logo" />
      </div>
    }>
      <motion.div>
        <ToastContainer
          theme='colored'
          position='top-right'
          hideProgressBar={true}
        />
        <Pages />
      </motion.div>
    </React.Suspense>
  )
}

export default App
