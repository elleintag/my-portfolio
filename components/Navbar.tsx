import React from 'react'
import Link from 'next/link'

const Navbar =  () => { 
  return (
    <nav className='sticky top-0 z-10'>
        <div className='mx-auto max-w-screen-xl py-2 text-white'>
            <div className='bg-black px-6 py-4 rounded-xl shadow-md'>
                <div className='flex justify-between'>
                    <div className='flex justify-left'>
                        <Link href='/'><img className='w-3/4' alt='Home' src='/assets/joelle.svg'></img></Link>
                    </div>
                    <div className='flex justify-items-center space-x-5'>
                        <Link className='hover:underline' href='/projects'>Projects</Link>
                        <Link className='hover:underline' href='/profile'>Profile</Link>
                        <a className='hover:underline' href='https://drive.google.com/file/d/1RvUcIJqw17sApz7PrGrt0rjkVfGYUVxJ/view?usp=sharing' target='_blank'>Resume</a>
                    </div>
                    <div className='flex justify-end'>
                        <a className='hover:underline' href='mailto:joellelintag@gmail.com'>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
