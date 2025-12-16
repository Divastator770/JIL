import React from 'react'
import Navbar from './parts/navbar'
import { BrowserRouter } from 'react-router-dom'
import Showcase from './parts/showcase'
import Faq from './parts/faq'
import Collabs from './parts/collabs'
import Loc from './parts/loc'
import Contact from './parts/contact'

const App = () => {
  
  return (
    <div className='bg-[#F2EFE6] w-full min-h-screen'>
      
     <BrowserRouter future={{
    v7_startTransition: true,
  }}>
   
   {/* Navbar */}
   <div className="py-2 sm:py-4">
     <Navbar/>
   </div>
   
   {/* Showcase - margin kichikroq qilindi */}
   <div className="mt-2 sm:mt-4 md:mt-6">
     <Showcase/>
   </div>
   
   {/* FAQ */}
   <div className="">
     <Faq/>
   </div>
   <div>
    <Collabs/>
   </div>
   <div>
    <Loc/>
   </div>
   <div>
    <Contact/>
   </div>
  </BrowserRouter>
  </div>
  )
}

export default App