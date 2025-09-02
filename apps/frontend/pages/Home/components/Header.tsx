import React from 'react'

const Header = () => {
   return (
      <div className=' border-dashed flex flex-col items-center justify-center  '>
         <div>
            <img src='/pac_black_logo.png' className='w-[30em] border'/>
         </div>

         <div className='border mt-2'>
            <ul className="flex gap-10">
               <li>ABOUT</li>
               <li>ART</li>
               <li>DESIGN</li>
               <li>FASHION</li>
               <li>ANALYTICS</li> 

            </ul>
         </div>

         {/* <div className="flex gap-8">
            <div>
               Login
            </div>
            <div>
               Search
            </div>
         </div> */}

      </div>
   )
}

export default Header
