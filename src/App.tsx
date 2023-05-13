import { motion } from 'framer-motion'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/swiper.scss'
import './App.css'
import { SuspenseLogo } from './assets'
const Pages = React.lazy(() => import("./Pages"))
SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y]);

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
