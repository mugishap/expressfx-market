import React from 'react'
import { footerLinks, paymentMethods, statistics } from '../../constants'
import { Link } from 'react-router-dom'
import { IMetadata } from '../../types'

const Footer: React.FC<{}> = () => {
    return (
        <div className='flex flex-col w-full items-center'>
            <div className='flex  w-full items-center justify-between'>
                <div className="w-1/2 bg-black h-10" id='left-foot'></div>
                <div className="w-1/2 bg-black h-10" id='right-foot'></div>
            </div>
            <div className="w-full flex md:flex-row flex-col justify-center py-10">
                <div className='flex items-center justify-between w-10/12'>
                    <div className='w-6/12 grid grid-cols-3'>
                        {
                            footerLinks.map((link, index) => (
                                <div className='flex flex-col' key={index}>
                                    <span className='font-bold text-orange text-lg mb-3'>{link.heading.toUpperCase()}</span>
                                    <ul>
                                        {
                                            link.links.map((_link, index) => (
                                                <li key={index} className='text-sm text-gray-2 my-2'><Link to={_link.href}>{_link.name.toUpperCase()}</Link> </li>
                                            ))
                                        }
                                    </ul>
                                    <div className='flex items-center'>
                                        {
                                            link.icons?.map((icon, index) => (
                                                <span className='w-8 mx-2 h-8 flex items-center justify-center rounded-full bg-white/10' key={index}><icon.icon color="white" /></span>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-5/12 flex flex-col">
                        <div className='grid py-6 border-b border-r-gray-400 grid-cols-2'>
                            {
                                statistics.map((statistic: IMetadata, index: number) => (
                                    <div className='flex flex-col m-4' key={index}>
                                        <span className='font-bold text-orange text-lg mb-1'>{statistic.value}</span>
                                        <span className='text-gray-1 text-xs'>{statistic.name.toUpperCase()}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex mt-6 flex-col'>
                            <span>SUPPORTED PAYMENT METHODS</span>
                            <div className='flex my-4'>
                                {
                                    paymentMethods.map((method, index) => (
                                        <img className='mx-1 w-10' src={method.image} key={index} alt={method.name} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer