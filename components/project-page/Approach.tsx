import React from 'react'

const Approach = ({Approach='Approach Text', img='/assets/', Caption='Caption'}) => {
  return (
    <div className='p-24 bg-blue-100 flex justify-evenly items-center'>
        <div className='w-1/2 space-y-3'>
            <p className='text-6xl text-blue-dark font-dg font-semibold tracking-tight'>Introduction</p>
            <p className='text-2xl text-blue-text font-ct'>{Approach}</p>
        </div>
        <div className=''>
            <img className='w-10/12 h-10/12' src={img}></img>
            <p className='text-xl text-blue-text font-ct italic'>{Caption}</p>
        </div>
    </div>
  )
}

export default Approach
