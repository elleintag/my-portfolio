import Link from 'next/link'
import React from 'react'
import ProjectIcon from '@/components/ProjectIcon'
import Header from '@/components/Header'
import Clover from '/Users/joellelintag/my-portfolio/public/assets/clover.svg'

const projects = () => {
  return (
    <div className= 'mx-auto px-10'>
      <div className='m-48'>
      </div>

      <div className='text-center pt-24 space-y-3'>
          <p className='text-5xl font-bold'>Selected Projects</p>
          <p className='text-xl italic'>What I've worked on so far!</p>
      </div>

      <div className='py-8'>
        <div className='grid grid-cols-2 gap-5'>
            <ProjectIcon 
              title='Interactive Bobbin Lace'
              sub='Undergraduate Capstone Research Project'
              page='/projects/bobbinlace'
              label_1='Research'
              label_2='Development'/>
            <ProjectIcon 
              title='Literacy Lagoon'
              sub='UX/UI App Design Project'
              page='/projects/literacylagoon'
              label_1='Research'
              label_2='Design System'/>
            <ProjectIcon />
            <ProjectIcon />
            <ProjectIcon />
            <ProjectIcon />
        </div>
      </div>

      <div className='text-center pt-24 pb-32 space-y-5'>
          <p className='text-3xl'>Find out what got me here!</p>
          <div>
            <Link className='bg-black text-white rounded-xl px-8 py-3' href='/profile'>About Me</Link>
          </div>
        </div>
      </div>
  )
}

export default projects
