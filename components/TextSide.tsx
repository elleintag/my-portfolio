import React from 'react'

const TextSide = ({headerText='header text', subText='description text'}) => {
  return (
    <div className='mx-auto px-32 mt-20 mb-36 space-y-10'>
        <div className='text-black text-left space-y-3'>
            <p className='text-4xl font-bold'>{headerText}</p>
            <div className='max-w-sm'>
              <p className='text-lg italic'>{subText}</p>
            </div>
        </div>
        <div>
            <a className='bg-black text-white rounded-xl px-8 py-3' href='mailto:joellelintag@gmail.com'>Let's Chat</a>
        </div>
    </div>
  )
}

export default TextSide
