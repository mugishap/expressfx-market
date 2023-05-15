import React from 'react'
import { BiMenuAltRight, BiUser, BiUserPlus } from 'react-icons/bi'
import { IoMdArrowDropup } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { LogoExpanded } from '../../assets'
import { metadata, navbarLinks } from '../../constants'
import { IMetadata, INavbarLink } from '../../types'
import { CommonContext } from '../../context'

const Navbar: React.FC<{}> = () => {

    const { setShowMenu } = React.useContext(CommonContext)

    return (
        <div className='w-full flex  flex-col'>
            <div className='flex w-full lg:flex-row flex-col py-4 bg-dim-black items-center justify-center'>
                <img src={LogoExpanded} className='my-4 lg:my-0 w-64 lg:w-32 xl:w-64' alt="" />
                <div className='my-4 lg:my-0 hidden sm:flex items-center mx-8'>
                    {
                        metadata.map((data: IMetadata, index: number) => (
                            <div key={index} className='mx-6 flex flex-col'>
                                <span className='font-bold text-white text-[13px]'>{data.value}</span>
                                <span className='text-gray-2 text-[12px]'>{data.value}</span>
                            </div>
                        ))
                    }
                    <div className='mx-2 flex flex-col'>
                        <span className='text-orange  font-bold text-[13px] flex items-center'>$27543.15 <IoMdArrowDropup size={20} color="green" /></span>
                        <span className='text-gray-2 text-[12px]'>Live Bitcoin Price</span>
                    </div>

                </div>
                <div className="my-4 lg:my-0 flex items-center">
                    <Link to={"/auth/login"}>
                        <button className="py-2 mx-3 px-4 border hover:bg-orange hover:text-white duration-0 text-orange flex items-center bg-transparent border-orange">
                            <BiUser className="duration-0" />
                            <span className='ml-2 text-sm'>SIGN IN</span>
                        </button>
                    </Link>
                    <Link to={"/auth/signup"}>
                        <button className="py-2 mx-3 px-4 bg-orange text-white flex items-center">
                            <BiUserPlus className="" />
                            <span className='ml-2 text-sm'>REGISTER</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='sticky top-0 flex w-full items-center justify-end px-16 mlg:px-0 mlg:justify-center bg-black py-4'>
                <div className='w-full hidden mlg:flex items-center justify-center'>
                    {
                        navbarLinks.map((link: INavbarLink, index: number) => {
                            return (
                                <Link to={link.href} key={index}>
                                    <div className={`px-4 ${window.location.pathname === link.pathname ? 'text-orange' : 'hover:text-orange text-white'}`}>
                                        {link.name.toUpperCase()}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <BiMenuAltRight onClick={() => setShowMenu(true)} className='cursor-pointer bg-orange flex mlg:hidden text-white' size={40} />
            </div>
            <div className='w-full bg-dim-black h-16'></div>
        </div>
    )
}

export default Navbar