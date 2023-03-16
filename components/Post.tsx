import React from 'react'

const Post = () => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 ">
          <a href='/' className='text-xl font-semibold mb-1' >Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế </a>
          <p className='text-gray-500 mb-3'>Confused? Here's a simple (yet thorough!) explainer.</p>
          <div className="flex items-center justify-between ">
            <div className='text-gray-400 text-sm flex items-center gap-2'>
              <span>Mar 12</span><span className='w-1 h-1 rounded-full bg-gray-400'></span><span>16 min read</span></div>
            <div className='flex items-center gap-2'>
              <a href='/' className='text-gray-400 text-sm hover:underline'>#Javascript</a>
            </div>
          </div>
        </div>
        <a className="">
          <img className='w-[100%] h-[100%] object-cover' src="https://miro.medium.com/v2/resize:fill:250:168/1*RSIvKqwzu_NhP3j026snnA.png" alt="What's Going On? The Silicon Valley Bank Collapse vs. the 2008 Financial Crisis" />
        </a>

      </div></>
  )
}

export default Post