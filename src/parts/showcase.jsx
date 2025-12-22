import GhostCursor from '@/components/GhostCursor'
import React from 'react'

const Showcase = () => {
  return (
    <div className="w-full h-[85vh] sm:h-screen relative overflow-hidden">
      <GhostCursor 
        color="#B19EEF"
        brightness={1}
        edgeIntensity={0}
        trailLength={50}
        inertia={0.5}
        grainIntensity={0.05}
        bloomStrength={0.1}
        bloomRadius={1.0}
        bloomThreshold={0.025}
        fadeDelayMs={1000}
        fadeDurationMs={1500}
      />
      
      {/* Matn qismi */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A3E31] mb-2 sm:mb-4 text-center">
          Welcome to
        </h1>
        
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A3E31] text-center leading-tight">
          <span className='text-yellow-800'>JIL</span>: The arena where
        </h1>
        
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A3E31] text-center leading-tight">
          arguments meet their match.
        </h1>
        
        <div className="mt-4 sm:mt-6 md:mt-8 flex gap-4 pointer-events-auto">
          <button className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 bg-transparent text-[#4A3E31] border-2 border-[#4A3E31] rounded-full font-semibold hover:bg-[#4A3E31] hover:text-white transition text-sm sm:text-base">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Showcase