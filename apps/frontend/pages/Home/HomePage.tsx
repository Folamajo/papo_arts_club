import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import LatestAndPopular from './components/LatestAndPopular'
import Footer from './components/Footer'

const HomePage = () => {
   return (
      <div className="border flex flex-col items-center justify-center ">
         <div className= 'border w-[100em]'>
            <Header />
            <Hero />
         </div>
         {/* <Header />
         
         <LatestAndPopular />
         <Footer /> */}
      </div>
   )
}

export default HomePage
