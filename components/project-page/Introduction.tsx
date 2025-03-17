import React from 'react'

const Introduction = ({Intro='Introduction Text', img='/assets/', Caption='Caption'}) => {
  return (
    <div className='p-24 bg-yellow-light flex justify-evenly items-center'>
        <div className='w-2/3 px-16 space-y-3'>
            <p className='text-6xl text-blue-dark font-dg font-semibold tracking-tight'>Introduction</p>
            <p className='text-xl text-blue-text font-ct tracking-tight'>{Intro}</p>
        </div>
        <div className=''>
            <img className='w-10/12 h-10/12' src={img}></img>
            <p className='text-xl text-blue-text font-ct italic tracking-tight px-2 py-3'>{Caption}</p>
        </div>
    </div>
  )
}

export default Introduction
