import React from 'react'
import { Helmet } from 'react-helmet'
import CommonHeader from '../Common/CommonHeader'
import CommonFooterComponent from '../Common/CommonFooterComponent'

const MarketComponent: React.FC = () => {
    return (
        <div className='w-full flex flex-col'>
            <Helmet>
                <title>Market Data | Express FX Market</title>
            </Helmet>
            <CommonHeader page='MARKET DATA' whiteText='MARKET' yellowText='DATA' />
            <div className='w-full flex flex-col py-14'>

            </div>
            <CommonFooterComponent />
        </div>
    )
}

export default MarketComponent