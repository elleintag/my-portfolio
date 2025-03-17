import React from 'react'

const Goals = ({Goal_1='Goal', Goal_2='Goal', Goal_3='Goal'}) => {
  return (
    <div className='px-24 py-20'>
        <p className='text-6xl text-blue-dark font-dg font-semibold tracking-tight'>Goals</p>
        <div className='px-16 py-8 space-y-8 text-3xl text-blue-text font-dg font-medium tracking-tight'>
            <p>{Goal_1}</p>
            <p>{Goal_2}</p>
            <p>{Goal_3}</p>
        </div>
    </div>
  )
}

export default Goals