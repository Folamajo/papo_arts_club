import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import LatestAndPopular from './components/LatestAndPopular'
import Footer from './components/Footer'

const HomePage = () => {
   return (
      <div className="flex flex-col items-center">
         <Header />
         <Hero />
         <LatestAndPopular />
         <Footer />
      </div>
   )
}

export default HomePage
