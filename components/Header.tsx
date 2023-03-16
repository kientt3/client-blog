import React from 'react'

const Header = () => {
  return (
    <header className='bg-white border-b-2 font-medium'>
      <nav className='container flex justify-between items-center py-4'>
        <a href="/" className='brand text-4xl'>NexGen</a>
        <ul className='hidden md:flex items-center gap-x-12 capitalize'>
          <li><a href="">Home</a></li>
          <li><a href="">about</a></li>
          <li><a href="">contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header