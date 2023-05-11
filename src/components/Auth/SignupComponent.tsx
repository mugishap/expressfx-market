import React, { FormEvent, useState } from 'react'
import { Bg2 } from '../../assets'
import { countries } from '../../constants'
import { ReCAPTCHA } from 'react-google-recaptcha'
import { ISignupData } from '../../types'
import { toast } from 'react-toastify'

const SignupComponent: React.FC<{}> = () => {

    const [signupData, setSignupData] = useState<ISignupData>({
        confirmPassword: "",
        country: "",
        email: "",
        fullName: "",
        password: "",
        phone: "",
        sex: ""
    })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!signupData.fullName || !signupData.country || !signupData.email || !signupData.password || !signupData.confirmPassword|| !signupData.sex|| !signupData.phone) toast.error("Please fill all fields")
    }
    return (
        <div style={{ background: `url(${Bg2})`, backgroundAttachment: "fixed", backgroundSize: "cover" }} className='w-full min-h-[70vh] items-center flex flex-col py-6'>
            <span className='text-5xl font-bold text-white flex'>
                GET &nbsp;
                <span className='text-orange'>STARTED</span>
            </span>
            <span className='my-4 text-gray-2'>Open account for free and start trading Bitcoins now!</span>
            <form onSubmit={handleSubmit} className='w-1/3 flex flex-col'>
                <input onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })} type="text" className='w-full my-2 bg-[#222222] border border-[#333] text-white text-sm px-6 py-4 placeholder:text-gray-1 placeholder:text-xs' placeholder='FULL NAME' />
                <input onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} type="email" className='w-full my-2 bg-[#222222] border border-[#333] text-white text-sm px-6 py-4 placeholder:text-gray-1 placeholder:text-xs' placeholder='EMAIL ADDRESS' />
                <input onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })} type="number" className='w-full my-2 bg-[#222222] border border-[#333] text-white text-sm px-6 py-4 placeholder:text-gray-1 placeholder:text-xs' placeholder='PHONE NUMBER' />
                <select onChange={(e) => setSignupData({ ...signupData, sex: e.target.value as "MALE" | "FEMALE" | "" })} className='w-full my-2 bg-[#222222] border border-[#333] text-white text-sm px-6 py-4 placeholder:text-gray-1 placeholder:text-xs'>
                    <option value="">--Select Sex--</option>
                    <option value="male">MALE</option>
                    <option value="female">FEMALE</option>
                </select>
                <select onChange={(e) => setSignupData({ ...signupData, country: e.target.value })} className='w-full my-2 bg-[#222222] border border-[#333] text-white text-sm px-6 py-4 placeholder:text-gray-1 placeholder:text-xs'>
                    <option value="">--Select Country--</option>
                    {
                        countries.map((country, index) => (
                            <option value={country} key={index}>{country}</option>
                        ))
                    }
                </select>
                <input onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} type="password" className='w-full my-2 bg-[#222222] border border-[#333] text-white text-sm px-6 py-4 placeholder:text-gray-1 placeholder:text-xs' placeholder='PASSWORD' />
                <input onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })} type="password" className='w-full my-2 bg-[#222222] border border-[#333] text-white text-sm px-6 py-4 placeholder:text-gray-1 placeholder:text-xs' placeholder='CONFIRM PASSWORD' />
                <ReCAPTCHA sitekey="THE_KEY_GOES_HERE" />
                <button type="submit" className="w-full py-3 bg-orange text-white text-center">
                    SIGNUP
                </button>
            </form>
        </div>
    )
}

export default SignupComponent