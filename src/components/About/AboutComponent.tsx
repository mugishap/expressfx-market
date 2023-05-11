import React from 'react'
import { Banner, Cta } from '../../assets'
import { AiFillWarning } from 'react-icons/ai'
import { Helmet } from 'react-helmet'

const AboutComponent: React.FC = () => {
  return (
    <div className='w-full flex flex-col mt-0'>
      <Helmet>
        <title>About Us | Express FX Market</title>
      </Helmet>
      <div style={{ background: `url(${Banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='z-[2] relative  w-full pt-20 pb-24 flex items-center justify-center'>
        <div className='z-[3] w-full h-full top-0 absolute bg-black/60'></div>
        <div className='flex z-[4] flex-col'>
          <span className='text-5xl font-bold text-white flex'>
            ABOUT &nbsp;
            <span className='text-orange'>US</span>
          </span>
          <div className='w-24 h-1 m-auto bg-white my-8'></div>
          <span className='flex m-auto'>
            <span className='text-orange'>HOME</span>&nbsp; / &nbsp;<span>ABOUT US</span>
          </span>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <div className='w-4/12'>
        </div>
        <div className='flex flex-col py-6 w-4/12'>
          <span className='font-bold text-2xl my-4'>WE ARE EXPRESS FX MARKET</span>
          <span className='text-gray-2'>A place for everyone who wants to simply buy and sell Bitcoins. Deposit funds using your Visa/MasterCard or bank transfer. Instant buy/sell of Bitcoins at fair price is guaranteed. Nothing extra. Join over 700,000 users from all over the world satisfied with our services.</span>
          <span className='font-bold text-2xl my-4 flex items-center'><AiFillWarning className="mr-3" size={25} color="white" /> RISK WARNING</span>
          <span className='text-gray-2'>Bitcoin is not legal tender and is not backed by any government. Accounts and value balances are not subject to any government backed deposit insurance or any other government protections.</span>
          <button className='text-white w-fit text-sm mt-6 bg-orange px-6 py-3 cursor-pointer'>OUR SERVICES</button>
        </div>
      </div>
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
    </div>
  )
}

export default AboutComponent