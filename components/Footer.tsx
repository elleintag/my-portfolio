import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='mx-auto max-w-screen-2xl bg-black rounded-xl px-20 py-8'>
        <div className='text-white space-y-20'>
          <div className='text-center text-md space-x-20'>
            <a className='hover:underline' href='https://www.linkedin.com/in/joelle-lintag/' target='_blank'>LinkedIn</a>
            <a className='hover:underline' href='https://github.com/elleintag' target='_blank'>GitHub</a>
            <a className='hover:underline' href='https://drive.google.com/file/d/1RvUcIJqw17sApz7PrGrt0rjkVfGYUVxJ/view?usp=sharing' target='_blank'>Resume</a>
          </div>
          <div className='text-left text-4xl max-w-md'>
              <p className='py-5'>Connect with me!</p>
              <a className='bg-black border-solid border-2 border-white text-white text-sm rounded-xl px-12 py-3' href='mailto:joellelintag@gmail.com'>Chat</a>
          </div>
          <div className='text-sm flex justify-between'>
            <div className='flex justify-left'><p>Joelle Lintag</p></div>
            <div className='flex justify-center'><img className='w-5' alt='Star' src='/assets/joelle.svg'></img></div>
            <div className='flex justify-end'><p>2025</p></div>
          </div>
        </div>
    </div>
  )
}

export default Footer
