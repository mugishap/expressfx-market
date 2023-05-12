import React from 'react'
import { Helmet } from 'react-helmet'
import CommonHeader from '../Common/CommonHeader'
import CommonFooterComponent from '../Common/CommonFooterComponent'
import { terms } from '../../constants'

const TermsComponent: React.FC = () => {
    return (
        <div className='flex flex-col w-full'>
            <Helmet>
                <title>Terms of Service | Express FX Market</title>
            </Helmet>
            <CommonHeader page='TERMS OF SERVICES' whiteText='TERMS OF' yellowText='SERVICES' />
            <div className='w-7/12 py-10 m-auto flex flex-col'>
                {
                    terms.map((term, index) => (
                        <div key={index} className='w-full flex flex-col my-4'>
                            <span className='font-bold text-xl my-2'>{term.title}</span>
                            <span className='text-gray-1 text-sm'>{term.description}</span>
                        </div>
                    ))
                }
            </div>
            <CommonFooterComponent />
        </div>
    )
}

export default TermsComponent