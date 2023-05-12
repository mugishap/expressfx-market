import React from 'react'
import { Helmet } from 'react-helmet'
import { BsAndroid2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { About, Bg1, Bg3, Cta, Feature } from '../../assets'
import { siteData, steps } from '../../constants'
import CommonFooterComponent from '../Common/CommonFooterComponent'

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
                    <div className='absolute grid grid-cols-3 -top-20 z-[5] w-8/12 m-auto left-0 right-0 bg-slate-800 p-16 px-10'>
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
            </div>
            <CommonFooterComponent />
        </div>
    )
}

export default HomeComponent