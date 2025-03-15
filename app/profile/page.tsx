import TextSide from '@/components/TextSide'
import React from 'react'

const profile = () => {
  return (
    <div className='pt-64'>
        <div className='text-left px-36 w-2/3 space-y-5'>
          <p className='font-bold text-6xl'>Hi! I'm Joelle!</p>
          <p className='text-xl italic'>A passionate self-taught designer with a data analysis and computing background.</p>
          <div className='space-y-10'>
            <p className='text-lg'>
              I love designing, stickers, and making things work! A lot of my work is inspired by the things I love and how I can share it with the world.
            </p>
            <p className='text-lg'>
              If you can’t find me in front of my desk making something new, I am either hosting a live embroidery pop-up or thrifting a new wardrobe! But I promise it is easy to get to me – let’s get in touch!
            </p>
          </div>
        </div>
        <div className='px-4'>
          <TextSide
            headerText='Have something in common?'
            subText='I love talking about how my experiences got me to where I am today. Reach out to me below!'/>
        </div>
     </div>
  )
}

export default profile
