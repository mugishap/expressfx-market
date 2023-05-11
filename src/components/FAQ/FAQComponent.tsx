import React from 'react'
import { Helmet } from 'react-helmet'

const FAQComponent: React.FC<{}> = () => {
    return (
        <div className='w-full'>
            <Helmet>
                <title>FAQ | Express FX Market</title>
            </Helmet>
        </div>
    )
}

export default FAQComponent