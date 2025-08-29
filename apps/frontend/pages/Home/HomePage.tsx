import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

const HomePage = () => {
   return (
      <div className="flex flex-col items-center">
         <Header />
         <Hero />
      </div>
   )
}

export default HomePage
