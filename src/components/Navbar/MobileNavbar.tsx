import React from 'react'
import { CommonContext } from '../../context'
import { navbarLinks } from '../../constants'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  const { setShowMenu } = React.useContext(CommonContext)
  return (
    <div className='w-full h-full absolute top-0 z-[2] bg-black/30'>
      <div className='w-full h-full z-[3]' onClick={() => setShowMenu(false)}></div>
      <div className='w-8/12 z-10 bg-white'>
        {
          navbarLinks.map((link, index) => (
            <Link className='my-3' to={link.href} key={index}>
              {link.name}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default MobileNavbar