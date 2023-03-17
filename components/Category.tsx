import React from 'react'

const Category = () => {
  return (
    <section className='hidden h-fit  sticky top-20 bg-white md:block'>
      <h4 className='font-semibold'>Khám phá thêm những chủ đề mới</h4>
      <div className='flex flex-wrap items-center gap-x-2 gap-y-1 '>
        <a href='/' className='text-gray-400 text-sm px-2 py-1 border hover:underline'>#Javascript</a>
        <a href='/' className='text-gray-400 text-sm  px-2 py-1 border hover:underline'>#Reactjs</a>
        <a href='/' className='text-gray-400 text-sm  px-2 py-1 border hover:underline'>#UI/UX</a>
        <a href='/' className='text-gray-400 text-sm  px-2 py-1 border hover:underline'>#Program</a>
        <a href='/' className='text-gray-400 text-sm  px-2 py-1 border hover:underline'>#SEO</a>
        <a href='/' className='text-gray-400 text-sm  px-2 py-1 border hover:underline'>#Nodejs</a>
        <a href='/' className='text-gray-400 text-sm  px-2 py-1 border hover:underline'>#Mongodb</a>
        <a href='/' className='text-gray-400 text-sm  px-2 py-1 border hover:underline'>#Mysql</a>
        <a href='/' className='text-gray-400 text-sm  px-2 py-1 border hover:underline'>#TailwindCSS</a>
      </div>
    </section>
  )
}

export default Category