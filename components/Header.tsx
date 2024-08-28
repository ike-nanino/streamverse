import Link from 'next/link'
import React from 'react'
import SearchInput from './SearchInput'
import GenreDropDown from './GenreDropDown'

function Header() {
  return (
    <header className='fixed w-full z-[15] top-0 flex items-center justify-between p-10 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 '>
        <div className='flex items-center'>
            <Link href="/" className='mr-10'>
            <h1 className='cursor-pointer text-2xl font-bold hover:text-gray-300 transition ease-in-out delay-250 '>STREAMVERSE</h1>
            </Link>
        </div>

        <div className='flex items-center space-x-2'>
            <GenreDropDown />
            <SearchInput />

        </div>
      
    </header>
  )
}

export default Header
