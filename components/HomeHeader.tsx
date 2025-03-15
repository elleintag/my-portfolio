import React from 'react'

const HomeHeader = ({header='', sub=''}) => {
  return (
    <div className='mx-auto max-w-screen-xl'>
        <div className='text-black space-y-5 text-center py-40'>
          <p className='text-8xl text-center font-bold'>{header}</p>
          <p className='text-3xl text-center italic'>{sub}</p>
        </div>
    </div>
  )
}

export default HomeHeader
