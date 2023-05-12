import React from 'react'
import { Helmet } from 'react-helmet'
import { BsAndroid2 } from 'react-icons/bs'
import { GoQuote } from 'react-icons/go'
import { IoLogoBitcoin } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { About, Bg1, Bg3, BgCalculator, BgVideo, Cta, Feature, Partner } from '../../assets'
import { characteristics, reviews, siteData, steps } from '../../constants'
import CommonFooterComponent from '../Common/CommonFooterComponent'

import Rating from "@mui/material/Rating"

const HomeComponent: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<string>("mission")
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full flex'>
                <Helmet>
                    <title>Home | Express FX Market</title>
                </Helmet>
            </div>
            <div className='flex w-full flex-col'>
                <div className='w-full'>
                    <Swiper
                        className='w-full'
                        autoplay={{
                            delay: 2500,
                        }}
                    >
                        <SwiperSlide className='w-full flex-col items-center justify-center min-h-[570px] relative z-[2]' style={{ background: `url(${Bg3})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                            <div className='z-[3] bg-black/60 w-full h-full absolute top-0'></div>
                            <div className='z-[4] flex w-full min-h-[570px] flex-col items-center justify-center'>
                                <span className='z-[6] text-7xl font-bold text-white text-center'>
                                    <span className='text-orange'>RELIABLE</span> &nbsp;
                                    INVESTMENT &nbsp;
                                    <br />
                                    YOU CAN &nbsp; <span className='text-orange'>TRUST</span>
                                </span>
                                <Link to={"/auth/signup"} className='z-[6]'>
                                    <button className="border-orange border mt-8 px-8 py-3">REGISTER NOW</button>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-full flex-col items-center justify-center min-h-[570px] relative z-[2]' style={{ background: `url(${Bg1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                            <div className='z-[3] bg-black/60 w-full h-full absolute top-0'></div>
                            <div className='z-[4] flex w-full min-h-[570px] flex-col items-center justify-center'>
                                <span className='z-[6] text-7xl font-bold text-white text-center'>
                                    <span className='text-orange'>SECURE</span> &nbsp;
                                    AND <span className='text-orange'>EASY WAY</span> &nbsp;
                                    <br />
                                    TO INVESTMENT
                                </span>
                                <Link to={"/auth/signup"} className='z-[6]'>
                                    <button className="border-orange border mt-8 px-8 py-3">REGISTER NOW</button>
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='w-full flex flex-col relative py-28'>
                    <div className='absolute grid grid-cols-3 -top-20 z-[5] w-8/12 m-auto left-0 right-0 bg-[#1d1d1d] p-16 px-10'>
                        {
                            steps.map((step, index) => (
                                <div className='flex w-11/12 m-auto' key={index}>
                                    <img width={50} className='' src={step.image} />
                                    <span className='flex ml-3 flex-col'>
                                        <span className='font-bold'>{step.heading}</span>
                                        <span className='text-sm text-gray-1'>{step.description}</span>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    <span className='text-5xl mt-8 text-center w-full font-bold  text-white'>
                        ABOUT &nbsp;
                        <span className='text-orange'>US</span>
                    </span>
                    <div className='w-5/12 m-auto flex items-center my-8 justify-around'>
                        <div className='bg-orange w-10 h-1'></div>
                        <span className='text-gray-2 text-sm '>A COMMERCIAL WEBSITE THAT POINTS YOU TO THE FUTURE OF INVESTMENT</span>
                        <div className='bg-orange w-10 h-1'></div>
                    </div>
                    <div className='flex w-9/12 my-8 m-auto justify-around'>
                        <img src={About} className='w-5/12 mx-2' alt="" />
                        <div className="w-1/2 mx-2 flex flex-col">
                            <span className='font-bold text-xl mb-6'>WE ARE EXPRESSFXMARKET</span>
                            <span className='my-4 text-gray-1'>
                                ExpressFxMarket INC is a fully certified and licensed company under the name Bitcoin Explore Limited with Company number 11188393. Established in 2017 first as a cloud mining provider and listed as one of the best sites to double bitcoins in 2018, we have now become a fully functional and trusted cryptocurrency investment company, verified by a lot of users. ExpressFxMarket offers automatic BTC doubling programme, providing access to high liquidity orderbook for top currency pairs in the market. Our investment options are made to meet the needs and requirements of all investors with various ranges of financial capabilitties.
                            </span>
                            <div className='w-full flex'>
                                {
                                    siteData.map((data, index) => (
                                        <span key={index} className={`${data.label === activeTab && "text-orange"} cursor-pointer my-4`} onClick={() => setActiveTab(data.label)}>{data.name} &nbsp; &nbsp; &nbsp; {index !== 2 && <span className='text-gray-1'>|</span>} &nbsp; &nbsp; &nbsp;</span>
                                    ))
                                }
                            </div>
                            <span className='my-4 text-gray-1'>
                                {siteData.filter(data => data.label === activeTab)[0].description}
                            </span>
                            <Link to={"/about"}>
                                <button className='px-6 py-2 bg-orange my-6'>READ MORE</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div style={{ background: `url(${Cta})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }} className='w-full flex items-center flex-col relative z-[3]'>
                    <div className='w-full h-full bg-black/70 backdrop-blur-sm absolute z-10 top-0'></div>
                    <div className='flex flex-col items-center z-10 w-full'>
                        <span className='text-5xl mt-8 text-center font-bold  text-white'>
                            OUR &nbsp;
                            <span className='text-orange'>FEATURES</span>
                        </span>
                        <div className='w-5/12 m-auto flex items-center my-8 justify-around'>
                            <div className='bg-orange w-10 h-1'></div>
                            <span className='text-gray-2 text-sm '>WE UNDERSTAND HOW IMPORTANT HAVING RELIABLE SERVICE IS TO YOU</span>
                            <div className='bg-orange w-10 h-1'></div>
                        </div>
                        <div className='w-8/12 h-[70vh] my-8 px-8 relative flex flex-col justify-between' style={{ background: `url(${Feature})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }} >
                            <div className='w-full flex justify-between items-center'>
                                <div className='flex items-center w-4/12 flex-col'>
                                    <span className='font-bold mb-6'>Protected Website</span>
                                    <span className='text-center'>
                                        Our server fully protected from DDoS & Malware attack. We are using COMODO Secure Sockets Layer for establishing an encrypted link between a web server and a browser.
                                    </span>
                                </div>
                                <div className='flex items-center w-4/12 flex-col'>
                                    <span className='font-bold mb-6'>UK Registered Company</span>
                                    <span className='text-center'>
                                        ExpressFxMarket is a legal company registered in the United Kingdom providing its investment services to the members all around the world
                                    </span>
                                </div>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <div className='flex items-center w-4/12 flex-col'>
                                    <span className='font-bold mb-6'>Reliable Investment Platform</span>
                                    <span className='text-center'>
                                        It is a team of professional traders in forex and cryptocurrency trading who know how to grab the profit end of the day
                                    </span>
                                </div>
                                <div className='flex items-center w-4/12 flex-col'>
                                    <span className='font-bold mb-6'>Strong ddos Protection</span>
                                    <span className='text-center'>
                                        We use one of the most experienced, professional and trusted DDoS protection and mitigation provider.
                                    </span>
                                </div>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <div className='flex items-center w-1/4 flex-col'>
                                    <span className='font-bold mb-6'>Quick Withdrawal</span>
                                    <span className='text-center'>
                                        Every withdrawal requests processes are instant to your eCurrency account. You can make as many requests as you want everyday without limitation.
                                    </span>
                                </div>
                                <div className='flex items-center w-1/4 flex-col'>
                                    <span className='font-bold mb-6'>COMODO SSL with Green Bar</span>
                                    <span className='text-center'>
                                        We are verified by COMODO. Our company has gone through the Extended Validation process and use EV SSL Certificate from COMODO.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full py-14 bg-black'>
                    <span className='text-5xl mt-8 text-center font-bold  text-white'>
                        EXPRESS FX MARKETING &nbsp;
                        <span className='text-orange'>APP</span>
                    </span>
                    <div className='w-5/12 m-auto flex items-center my-8 justify-around'>
                        <div className='bg-orange w-10 h-1'></div>
                        <span className='text-gray-2 text-sm '>ENJOY A BETTER EXPERIENCE AS YOU INVEST WITH US USING OUR ANDROID APP</span>
                        <div className='bg-orange w-10 h-1'></div>
                    </div>

                    <button className="my-12 w-fit m-auto items-center flex px-6 py-2 bg-green-500 text-white">
                        <BsAndroid2 size={35} />
                        <span className='ml-2 text-base'>Download App</span>
                    </button>
                </div>

                <div className='w-full bg-[#1d1d1d]  flex items-center'>
                    <div className="w-8/12 flex justify-end py-14 items-center">
                        <div className='w-8/12 grid grid-cols-2'>
                            {
                                characteristics.map((data, index) => (
                                    <div className='flex w-9/12 m-4 mx-auto flex-col items-center' key={index}>
                                        <img src={data.image} alt="" />
                                        <span className="font-bold">{data.heading}</span>
                                        <span className="text-gray-1">{data.description}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-4/12 h-[75vh]' style={{ background: `url(${BgVideo})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }} >
                        <div className='w-full h-full bg-black/60'></div>
                    </div>
                </div>

                <div className='w-full z-[3] my-[9vh] h-[25vh] relative' style={{ background: `url(${BgCalculator})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }} >
                    <div className="bg-black/60 absolute w-full h-full z-[4]"></div>
                    <div className='absolute  h-[40vh] w-8/12 bg-[#1d1d1d] flex flex-col right-0 z-[5] shadow left-0 m-auto -top-[6vh] items-center justify-center'>
                        <span className='text-5xl mt-8 text-center font-bold  text-white'>
                            BITCOIN &nbsp;
                            <span className='text-orange'>CALCULATOR</span>
                        </span>
                        <span className='text-gray-2 my-10'>FIND OUT THE CURRENT BITCOIN VALUE WITH OUR EASY-TO-USE CONVERTER</span>
                        <div className='w-8/12 flex items-center justify-between'>
                            <div className='flex w-5/12 items-center justify-center'>
                                <input type="number" defaultValue={0} min={0} className='outline-none text-center text-xl font-bold w-8/12 border h-12 border-gray-1 bg-black text-white' />
                                <div className='bg-orange p-3 h-fit text-white'>
                                    <IoLogoBitcoin size={25} />
                                </div>
                            </div>
                            <span className='text-2xl font-bold'>=</span>
                            <div className='flex w-5/12 items-center justify-center'>
                                <input type="number" defaultValue={120.34} min={0} className='outline-none text-center text-xl font-bold w-8/12 border h-12 border-gray-1 bg-black text-white' />
                                <select className='bg-orange h-12 w-16 outline-none flex items-center justify-center text-white'>
                                    {
                                        ["ARS", "AUD", "BRL", "CAD", "CHF"].map((data, index) => (
                                            <option className='bg-orange text-white py-2' key={index} value={data}>{data}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <span className='text-gray-2 my-6 italic'>* Data updated every 15 minutes</span>
                    </div>
                </div>
                <div className='w-full bg-[#1d1d1d]  flex items-center'>
                    <div className='w-4/12 h-[75vh]' style={{ background: `url(${BgVideo})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }} >
                        <div className='w-full  h-full bg-black/70 absolute'></div>
                        <div className='w-10/12 m-auto flex-col z-10 h-full flex justify-center items-center'>
                            <div className='flex flex-col relative'>
                                <GoQuote className="text-orange" size={25} />
                                <span className='italic text-lg text-white font-light'>
                                    Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It's the dawn of a better, more free world.
                                </span>
                                <div className='w-full flex justify-end'>
                                    <GoQuote className="text-orange rotate-180 " size={25} />
                                </div>
                            </div>
                            <div className="w-full z-20 flex items-center">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className='h-10 w-10 rounded-full object-cover bordr-whit border-2' alt="" />
                                <span className='font-bold mx-3 text-orange'>MARC SMITH</span>
                                <span>-</span>
                                <span className='mx-3'>CEO</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-8/12 z-20 flex justify-end items-center">
                        <iframe src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505" className='w-full  h-[75vh]'></iframe>
                    </div>
                </div>

                <div className='w-full z-[3] my-[9vh] h-[45vh] relative' style={{ background: `url(${BgCalculator})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }} >
                    <div className="absolute w-full h-full bg-black/70"></div>
                    <Swiper
                        className="z-1 w-1/2"
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 1, disableOnInteraction: false }}
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide
                                key={index}
                                className="m-auto w-1/2 flex-col flex h-full items-center justify-center"
                            >
                                <span className="w-2/3 font-medium text-lg text-white italic font-poppins my-3">
                                    {review.review}
                                </span>
                                <img
                                    alt={Math.random().toString()}
                                    src={review.image}
                                    className="w-16 my-3 rounded-full object-cover"
                                />
                                <span className="w-full text-center font-semibold text-xl font-poppins my-3">
                                    {review.name}
                                </span>
                                <span className='italic my-2 flex'>
                                    {review.role} &nbsp; at &nbsp; <span className='text-orange'>{review.workplace}</span>
                                </span>
                                <Rating
                                    name="read-only"
                                    value={review.rating}
                                    readOnly
                                    className="my-2"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='w-full flex flex-col items-center'>
                    <span className='text-5xl mt-8 text-center w-full font-bold  text-white'>
                        BITCOIN &nbsp;
                        <span className='text-orange'>HIGHLIGHTS</span>
                    </span>
                    <div className='w-5/12 m-auto flex items-center my-8 justify-around'>
                        <div className='bg-orange w-10 h-1'></div>
                        <span className='text-gray-2 text-sm '>DISCOVER LATEST HIGHLIGHTS ABOUT BITCOIN AROUND THE WORLD</span>
                        <div className='bg-orange w-10 h-1'></div>
                    </div>
                    <span className='font-bold text-2xl text-white mt-10 my-4'>OUR OFFICIAL PARTNER</span>
                    <span className='font-light text-lg my-2'>We are not alone, we partner with the best</span>
                    <img src={Partner} className='mt-4 w-4/12' alt="" />
                </div>

            </div>
            <CommonFooterComponent />
        </div >
    )
}

export default HomeComponent