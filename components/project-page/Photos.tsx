import React from 'react'

const Photos = ({img_1='/assets/', img_2='/assets/', img_3='/assets/', Caption='Caption'}) => {
  return (
    <div className='px-12 space-y-5'>
        <div className='space-x-3 flex justify-evenly'>
          <img src={img_1}></img>
          <img src={img_2}></img>
          <img src={img_3}></img>
        </div>
        <p className='text-2xl text-blue-text font-ct italic tracking-tight'>{Caption}</p>
    </div>
  )
}

export default Photos