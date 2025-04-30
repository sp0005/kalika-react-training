import React from 'react'

const Hero = () => {
  return (
      <div className='h-[80vh]  flex flex-col justify-center items-center gap-7 m-15 '>
         <h1 className='text-5xl font-bold text-amber-50'>React Developer</h1>
         <p className='text-base font-bold text-amber-50'>Hello It's me sachin pandey</p>
        <div className='flex gap-3 -m-3'>
        <div className='cursor-pointer  py-2 px-3 bg-blue-500 rounded-4xl text-white mt-4 hover:bg-blue-700 '>Explore Project</div>
        <div className='cursor-pointer  py-2 px-3 bg-gray-300 rounded-4xl text-black mt-4 hover:bg-blue-700 '>Let's Connect</div>
        </div>
      </div>
  )
}

export default Hero