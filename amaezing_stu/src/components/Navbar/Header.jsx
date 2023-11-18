import React from 'react'
import {Link} from 'react-router-dom'

export function Header() {
  return (
    <>
        <header className='mx-auto my-3 py-2 shadow-md rounded-lg w-full px-4'>
          <nav className='flex items-center px-5 justify-between'>
            <Link to="/"><img className='w-20 ' src="./Bible-hero/amaezingvec.png"/></Link> 
           
              <ul className=' flex  space-x-5 font-bold text-lg'>
              <li className='text-gray-500 hover:text-purple-700'>
                <Link to="/">Home</Link>
              </li>
              <li className='text-gray-500 hover:text-purple-700'><Link to='/service'>Services</Link></li>
              <li className='text-gray-500 hover:text-purple-700'><Link to='/gallery'>Gallery</Link></li>
              <li className='text-gray-500 hover:text-purple-700'><Link to='/contact'>Contact</Link></li>
            </ul> 
          </nav>
        </header>
    </>
  )
}
export default Header
