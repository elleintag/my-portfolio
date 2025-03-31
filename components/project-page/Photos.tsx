import React from 'react'
import Image from 'next/image'

const Photos = (
  {
    img_1,
    img_2,
    img_3,
    alt_1,
    alt_2,
    alt_3,
    Caption    
  }: {
      img_1: string;
      img_2: string;
      img_3: string;
      alt_1: string;
      alt_2: string;
      alt_3: string;
      Caption: string;
  }) => {
  return (
    <div className='px-12 space-y-5'>
        <div className='space-x-3 flex justify-between items-start'>
          <Image 
            alt={alt_1}
            src={img_1}
            height={329}
            width={439}
            className='rounded-xl object-cover'
            unoptimized
          />
          <Image 
            alt={alt_2}
            src={img_2}
            height={329}
            width={439}
            className='rounded-xl'
            unoptimized
          />
          <Image 
          alt={alt_3}
          src={img_3}
          height={329}
          width={439}
          className='rounded-xl'
          unoptimized
        />
        </div>
        <p className='text-lg text-blue-text font-dm font-light italic tracking-tight'>{Caption}</p>
    </div>
  )
}

export default Photos