import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomBtn from './CustomBtn'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10 '>
        <nav className='max-w-[1440px] mx-auto flex justify-between px-6 py-4'>
            <Link href='/' className='flex justify-center  '>
                <Image src='/logo.svg' width={118} height={18} alt='car' className='object-contain'/>
            </Link>
            <CustomBtn  title='Sign In' btnType='button' containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'/>
        </nav>
    </header>
  )
}

export default Navbar