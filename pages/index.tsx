import Head from 'next/head'
import Image from 'next/image'
import Post from '@/components/Post'
import Category from '@/components/Category'

export default function Home() {
  return (
    <>

      {/* <section className='nexgen__hero py-24 bg-green-500 mb-16'>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-white">
            <h1 className='text-7xl mb-3 font-semibold'>Discover more of what matters to you</h1>
            <p className=' text-2xl'>Join and develop your skills</p>
          </div>
        </div>
      </section> */}
      <section className='container grid grid-cols-1 lg:grid-cols-3 gap-14'>
        <div className=' flex flex-col gap-y-12 col-span-2'>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <Category />
      </section>

    </>
  )
}
