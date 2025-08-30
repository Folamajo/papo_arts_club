import React from 'react'

const LatestAndPopular = () => {
   return (
      <div className='border w-[60em]'>
         <div className='flex'>
            <div className='border w-[20em]' >
               Latest
            </div>
            <div className='border w-[20em]'>
               Popular
            </div>
            <div className='border w-[20em]'>
               Search
            </div>
         </div>
         <div>
            <div className='h-80 w-[40em] border'>

            </div>
            <div className='h-80 w-[40em] border'>

            </div>
            <div className='h-80 w-[40em] border'>

            </div>
            
         </div>
         <div className='text-center my-4'>
            <button className='border p-4'>
               Load more
            </button>
         </div>
      </div>
   )
}

export default LatestAndPopular
