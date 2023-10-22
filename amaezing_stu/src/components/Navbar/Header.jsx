import React from 'react'
function Header() {
  return (
    <>
        <header className='mx-auto my-3 shadow-md'>
          <nav className='flex items-center justify-between'>
            <a href='#'><img className='w-20' src="./Bible-hero/amaezingvec.png"/></a> 
            <ul className=' flex  space-x-5 font-bold text-xl'>
              <li className='text-gray-900 hover:text-purple-700'><a href='#'>About Us</a></li>
              <li className='text-gray-900 hover:text-purple-700'><a href='#'>Services</a></li>
              <li className='text-gray-900 hover:text-purple-700'><a href='#'>Gallery</a></li>
              <li className='text-gray-900 hover:text-purple-700'><a href='#'>Contact</a></li>
            </ul>
            <a href="/">
              <button class="bn632-hover rounded-2xl bn24 px-8 py-2 bg-gradient-to-r from-purple-600 to-red-500 text-white font-semibold hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white">
                Sign Up
              </button>
            </a>

          </nav>
        </header>
    </>
  )
}

export default Header
