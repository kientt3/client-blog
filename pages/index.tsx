import Head from 'next/head'
import Image from 'next/image'
import Post from '@/components/Post'
import Category from '@/components/Category'
export default function Home() {
  return (
    <>

      <section className='nexgen__hero py-10 bg-green-500 mb-16'>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-white  flex flex-col justify-center items-start">
            <h1 className='text-7xl mb-4 font-semibold'>Tham gia cùng nhau tìm hiểu công nghệ mới</h1>
            <p className=' text-2xl mb-5'>Tham gia và phát triển kỹ năng của bạn</p>
            <a href='/' className='p-4 rounded-full bg-black inline-block hover:bg-opacity-95'>Bắt đầu tham gia </a>
          </div>
          <div>
            <Image src="/multitasking.png" width={700} height={700} alt="NexGen Join together to learn new technology" />
          </div>
        </div>
        <div>

        </div>
      </section>
      <section className='container grid grid-cols-1 lg:grid-cols-3 gap-14 my-32'>
        <div className=' flex flex-col gap-y-12 col-span-2'>
          <h3 className='text-2xl font-semibold'>Bài viết mới nhất</h3>
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
