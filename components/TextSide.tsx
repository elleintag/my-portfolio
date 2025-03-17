import React from 'react'

const TextSide = ({headerText='header text', subText='description text'}) => {
  return (
    <div className='px-32 w-2/3 mt-20 mb-36 space-y-10'>
        <div className='text-blue-dark text-left space-y-3'>
            <p className='text-5xl font-dm font-semibold tracking-tighter'>{headerText}</p>
            <div className=''>
              <p className='text-2xl text-blue-default font-dm italic'>{subText}</p>
            </div>
        </div>
        <div>
            <a className='bg-blue-dark border-2 border-solid border-blue-dark text-yellow-light hover:bg-yellow-bg hover:text-blue-dark text-2xl font-dg font-medium rounded-2xl px-8 py-2' href='https://www.linkedin.com/in/joelle-lintag/' target='_blank'>Let's Chat</a>
        </div>
    </div>
  )
}

export default TextSide
