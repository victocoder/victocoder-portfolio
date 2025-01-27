import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center pt-[150px] flex-col gap-4 px-4'>
        <h1 className='text-6xl md:text-8xl'>Mesfin Girma</h1>
      <p>I am Software Developer</p>
      <p className='text-center'>A professional in solving tech related problems and helping companies and individuals own high quality software appications</p>

      <button className='border border-red-100 px-2 py-2 rounded-sm'>Download Cv</button>
    </div>
  )
}

export default Hero
