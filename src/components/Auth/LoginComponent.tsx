import React, { FormEvent, useState } from 'react'
import { ILoginData } from '../../types'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { Bg2 } from '../../assets'

const LoginComponent: React.FC<{}> = () => {

  const [loginData, setLoginData] = useState<ILoginData>({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!loginData.email || !loginData.password) toast.error("Please fill all fields")
    return toast.warning("Still underconstruction")
  }

  return (
    <div style={{ background: `url(${Bg2})`, backgroundAttachment: "fixed", backgroundSize: "cover" }} className='w-full items-center flex flex-col py-6'>
      <span className='text-5xl mb-4 font-bold text-white flex'>
        ACCOUNT &nbsp;
        <span className='text-orange'>LOGIN</span>
      </span>
      <form onSubmit={handleSubmit} className='w-1/3 flex flex-col'>
        <input value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} type="email" className='w-full my-2 bg-[#222222] border border-[#333] text-white text-sm px-6 py-4 placeholder:text-gray-1 placeholder:text-xs' placeholder='EMAIL ADDRESS' />

        <input value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} type="password" className='w-full my-2 bg-[#222222] border border-[#333] text-white text-sm px-6 py-4 placeholder:text-gray-1 placeholder:text-xs' placeholder='PASSWORD' />
        <button type="submit" className="w-full py-3 bg-orange my-3 text-white text-center">
          LOGIN
        </button>
        <span className='my-2 text-center text-gray-1'>Don't have an account yet? <Link to={"/auth/signup"} className='text-orange'>Register</Link> </span>
        <Link to={"/auth/forgot-password"} className='text-center text-orange my-2'>Forgot Password ?</Link>
      </form>
    </div>
  )
}

export default LoginComponent