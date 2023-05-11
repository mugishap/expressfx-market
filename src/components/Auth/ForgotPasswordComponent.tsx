import React, { FormEvent, useState } from 'react'
import { Bg2 } from '../../assets'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet'

const ForgotPasswordComponent: React.FC<{}> = () => {

    const [email, setEmail] = useState("")

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (email) toast.error("Please fill all fields")
    }

    return (
        <div style={{ background: `url(${Bg2})`, backgroundAttachment: "fixed", backgroundSize: "cover" }} className='w-full items-center flex flex-col py-6'>
            <Helmet>
                <title>Forgot Password | Express FX Market</title>
            </Helmet>
            <span className='text-5xl mb-4 font-bold text-white flex'>
                RECOVER &nbsp;
                <span className='text-orange'>PASSWORD</span>
            </span>
            <form onSubmit={handleSubmit} className='w-1/3 flex flex-col'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='w-full my-2 bg-[#222222] border border-[#333] text-white text-sm px-6 py-4 placeholder:text-gray-1 placeholder:text-xs' placeholder='EMAIL ADDRESS' />
                <button type="submit" className="w-full py-3 bg-orange my-3 text-white text-center">
                    RECOVER
                </button>
            </form>
        </div>
    )
}

export default ForgotPasswordComponent