import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='flex items-center justify-between h-28 bg-black '>
        <div className='flex items-center'>
            <Link href="/" className='ml-10 max-sm:ml-2'>
            <h1 className='cursor-pointer text-blue-500 text-2xl max-sm:text-base font-bold hover:text-blue-600 transition ease-in-out delay-250'>STREAMVERSE</h1>
            </Link>

        </div>

        <div>
            <h1 className='text-sm text-gravy mr-10 max-sm:mr-1'> Designed and Developed by Nanino</h1>

        </div>
    
        
    </footer>
  )
}

export default Footer
