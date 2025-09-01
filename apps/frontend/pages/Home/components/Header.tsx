import React from 'react'

const Header = () => {
   return (
      <div className='border border-dashed flex items-center justify-center gap-[10em] '>
         <div>
            <img src='/pac_logo.png' className='w-[30em] border'/>
         </div>

         <div >
            <ul className="flex gap-10">
               <li>ART</li>
               <li>DESIGN</li>
               <li>FASHION</li>
               <li>ANALYTICS</li>

            </ul>
         </div>

         <div className="flex gap-8">
            <div>
               Login
            </div>
            <div>
               Search
            </div>
         </div>
      </div>
   )
}

export default Header
