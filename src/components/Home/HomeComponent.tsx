import React from 'react'
import { Helmet } from 'react-helmet'

const HomeComponent: React.FC = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full flex'>
                <Helmet>
                    <title>Home | Express FX Market</title>
                </Helmet>
            </div>
        </div>
    )
}

export default HomeComponent