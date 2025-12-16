import { Instagram, Send } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <footer className='border-t-2 border-gray-300 mt-5 mb-3 py-8'>
      <div className='max-w-6xl mx-auto px-4'>
        {/* Contact Section */}
        <div className='text-center mb-6'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A3E31] mb-6'>
            Contact with us
          </h2>
          
          {/* Social Icons */}
          <div className='flex items-center justify-center gap-6 sm:gap-8'>
            {/* Instagram */}
            <a 
              href='https://www.instagram.com/jil_debate?igsh=MW9kZnh5d3k1djV2bw==' 
              target='_blank' 
              rel='noopener noreferrer'
              className='group flex flex-col items-center gap-2 transition-transform hover:scale-110'
            >
              <div className='p-3 sm:p-4 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full shadow-lg group-hover:shadow-xl transition-shadow'>
                <Instagram className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
              </div>
              <span className='text-xs sm:text-sm font-medium text-gray-700'>Instagram</span>
            </a>

            {/* Telegram */}
            <a 
              href='https://t.me/jildebate' 
              target='_blank' 
              rel='noopener noreferrer'
              className='group flex flex-col items-center gap-2 transition-transform hover:scale-110'
            >
              <div className='p-3 sm:p-4 bg-blue-500 rounded-full shadow-lg group-hover:shadow-xl transition-shadow'>
                <Send className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
              </div>
              <span className='text-xs sm:text-sm font-medium text-gray-700'>Telegram</span>
            </a>
          </div>
        </div>

        {/* Bottom Message */}
        <div className='text-center pt-6 border-t border-gray-200'>
          <p className='text-sm sm:text-base md:text-lg text-gray-600 font-medium'>
            Don't forget to follow our updates!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Contact