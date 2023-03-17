import React from 'react'

const Header = () => {
  return (
    <header className='bg-white border-b-2 font-medium sticky top-0 z-50'>
      <nav className='container flex justify-between items-center py-4'>
        <a href="/" className='brand text-4xl font-medium'>NexGen</a>
        <ul className='hidden md:flex items-center gap-x-12 capitalize'>
          <li><a href="">Bài viết</a></li>
          <li><a href="">Hỏi đáp</a></li>
          <li><a href="">Chủ đề</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header