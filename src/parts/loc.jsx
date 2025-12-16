import DomeGallery from '@/components/DomeGallery'
import React from 'react'

const Loc = () => {
  return (
    <div id='' className='min-h-screen'>
      <h1 className='flex items-center justify-center text-[#4A3E31] text-4xl sm:text-5xl md:text-6xl lg:text-[70px] mb-2 font-bold px-4 text-center'>
        Photo album
      </h1>
      <p className='flex items-center justify-center text-base sm:text-lg md:text-xl mb-5 font-bold px-4 text-center'>
        History of our debate
      </p>
      <div className='bg-[#F2EFE6] w-full' style={{ height: '100vh' }}>
        <DomeGallery minRadius={1200} grayscale={0}/>
      </div>
    </div>
  )
}

export default Loc