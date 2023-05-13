import React from 'react'
import { Helmet } from 'react-helmet'
import CommonHeader from '../Common/CommonHeader'
import CommonFooterComponent from '../Common/CommonFooterComponent'
import { otherMarketData } from '../../constants'

const MarketComponent: React.FC = () => {
    return (
        <div className='w-full flex flex-col'>
            <Helmet>
                <title>Market Data | Express FX Market</title>
                <script type="text/javascript" src="https://widgets.cryptocompare.com/serve/v3/coin/chart?fsym=BTC&amp;tsyms=USD,EUR,CNY,GBP&amp;app=localhost"></script>
            </Helmet>
            <CommonHeader page='MARKET DATA' whiteText='MARKET' yellowText='DATA' />
            <div className='w-full flex flex-col py-14'>
                <div className="ccc-widget ccc-chart-v3"></div>
            </div>
            <div className='w-full items-center flex-col flex'>
                <span className='text-5xl font-bold text-white flex'>
                    OTHER &nbsp;
                    <span className='text-orange'>MARKET'S</span> &nbsp;
                    DATA
                </span>
                <div className='w-full flex justify-center items-center'>
                    <div className='w-10/12 my-4 border-4 border-orange'>
                        <table className='w-full bg-white text-black'>
                            <thead>
                                <tr>
                                    <th className='text-black text-center   py-4'>Date</th>
                                    <th className='text-black text-center   py-4'>Price</th>
                                    <th className='text-black text-center   py-4'>Volume</th>
                                    <th className='text-black text-center   py-4'>Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    otherMarketData.map((data, index) => (
                                        <tr key={index} className='border-b border-gray-2 text-black text-left'>
                                            <td className=' py-4 text-center'>{data.date}</td>
                                            <td className=' py-4 text-center'>{data.price}</td>
                                            <td className=' py-4 text-center'>{data.volume}</td>
                                            <td className='text-red-600 p-2'>{data.change}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <CommonFooterComponent />
        </div>
    )
}

export default MarketComponent