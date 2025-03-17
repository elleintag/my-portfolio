import React from 'react'
import Featured from '@/components/Featured'
import TextSide from '@/components/TextSide'

const home = () => {
  return (
    <main>
      <div className='mx-auto'>
        <div className= 'space-y-5 text-center pt-40 pb-24'>
          <p className='text-8xl text-blue-text text-center font-dm font-bold tracking-tighter'>Hi! I'm Joelle!</p>
          <div className='space-x-2 text-4xl text-blue-text text-center tracking-tight flex items-center justify-center'>
            <p className='font-ss font-light italic'>A</p>
            <p className='font-dm font-medium'>designer /</p>
            <p className='font-ss font-light italic'>analyzer </p>
            <p className='font-dm font-medium'>/ developer</p>
            <p className='font-ss font-light italic'>of all sorts</p>
          </div>
        </div>
        <Featured />
        <TextSide 
          headerText='All about design, data, and innovative solutions?'
          subText='I’d love to connect! I’m currently exploring exciting new roles and challenges.'
        />
      </div>
    </main>
  )
}

export default home