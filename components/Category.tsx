import React from 'react'

const Category = () => {
  return (
    <div className='hidden md:block'>
      <h4 className='font-semibold'>Khám phá thêm những điều quan trọng với bạn</h4>
      <div className='flex flex-wrap items-center gap-x-2 gap-y-1 '>
        <a href='/' className='text-gray-400 text-sm hover:underline'>#Javascript</a>
        <a href='/' className='text-gray-400 text-sm hover:underline'>#Javascript</a>
        <a href='/' className='text-gray-400 text-sm hover:underline'>#Javascript</a>
        <a href='/' className='text-gray-400 text-sm hover:underline'>#Javascript</a>
      </div>
    </div>
  )
}

export default Category