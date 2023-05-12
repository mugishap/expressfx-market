import React from 'react'
import { Helmet } from 'react-helmet'
import { AiFillWarning } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { facts } from '../../constants'
import { IMetadata } from '../../types'
import CommonFooterComponent from '../Common/CommonFooterComponent'
import CommonHeader from '../Common/CommonHeader'

const AboutComponent: React.FC = () => {
  return (
    <div className='w-full flex flex-col mt-0'>
      <Helmet>
        <title>About Us | Express FX Market</title>
      </Helmet>
      <CommonHeader page='ABOUT US' whiteText='ABOUT' yellowText='US' />
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
      <div className='bg-orange w-full h-96 relative py-16 mt-20 z-[5]'>
        <div className='w-8/12 my-auto z-[6] left-0 right-0 m-auto bg-[#222] py-24 -top-16 flex flex-col absolute items-center'>
          <span className='text-5xl mb-4 font-bold text-white flex'>
            EXPRESSFXMARKET &nbsp;
            <span className='text-orange'>NUMBERS</span>
          </span>
          <span className='my-4 text-gray-2'>LEADING CRYPTOCURRENCY EXCHANGE SINCE DAY ONE OF BITCOIN DISTRIBUTION</span>
          <div className='w-full grid grid-cols-4 my-6'>
            {
              facts.map((fact: IMetadata, index: number) => (
                <div key={index} className="relative fact border-r flex flex-col items-center justify-center">
                  <span className='font-bold text-4xl text-white'>{fact.value}</span>
                  <span className='font-light text-xs text-gray-1'>{fact.name}</span>
                  {/* {index !== 0 && <div className='absolute h-44 rotate-[23deg] w-[2px] -left-14 -top-18 z-[8] bg-gray-100'></div>} */}
                </div>
              ))
            }
          </div>
          <div className="flex items-center my-8">
            <Link to={"/auth/login"}>
              <button className="py-2 mx-3 px-4 border hover:bg-orange hover:text-white duration-0 text-orange flex items-center bg-transparent border-orange">
                <span className='ml-2 text-sm'>LOGIN NOW</span>
              </button>
            </Link>
            <span className='mx-3 italic'>or</span>
            <Link to={"/auth/signup"}>
              <button className="py-2 mx-3 px-4 bg-orange text-white flex items-center">
                <span className='ml-2 text-sm'>REGISTER NOW</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <CommonFooterComponent />
    </div>
  )
}

export default AboutComponent