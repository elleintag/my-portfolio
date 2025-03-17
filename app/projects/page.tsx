import Link from 'next/link'
import React from 'react'
import ProjectIcon from '@/components/ProjectIcon'

const projects = () => {
  return (
    <div className= 'mx-auto px-10'>
      <div className='m-48'>
      </div>

      <div className='text-center pt-24 space-y-3'>
          <p className='text-6xl text-blue-dark font-dm font-semibold tracking-tight'>Selected Projects</p>
          <p className='text-2xl text-blue-default font-ct italic'>What I've worked on so far!</p>
      </div>

      <div className='py-8'>
        <div className='grid grid-cols-2 gap-5'>
            <ProjectIcon 
              title='Interactive Bobbin Lace'
              sub='Undergraduate Capstone Research Project'
              page='/projects/bobbinlace'
              label_1='Research'
              label_2='Development'
              bg='bg-blue-default'
              text='text-yellow-light'
              bglabel='bg-yellow-light'
              textlabel='text-blue-default'/>
            <ProjectIcon 
              title='Literacy Lagoon'
              sub='UX/UI App Design'
              page='/projects/literacylagoon'
              label_1='Research'
              label_2='Design System'
              bg='bg-green'
              text='text-yellow-light'
              bglabel='bg-yellow-light'
              textlabel='text-green'/>
            <ProjectIcon 
              title='Mootate'
              sub='2D Game Development'
              page='/projects/mootate'
              label_1='Development'
              label_2='Game Design'
              bg='bg-green'
              text='text-yellow-light'
              bglabel='bg-yellow-light'
              textlabel='text-green'/>
            <ProjectIcon 
              title='Women in Science & Engineering'
              sub='Branding & Marketing'
              page='/projects/wise'
              label_1='Design'
              label_2='Social Media'
              bg='bg-blue-default'
              text='text-yellow-light'
              bglabel='bg-yellow-light'
              textlabel='text-blue-default'/> 
            <ProjectIcon 
              title='How to be WiSE Podcast'
              sub='Branding & Marketing'
              page='/projects/htbw'
              label_1='Design'
              label_2='Social Media'
              bg='bg-blue-default'
              text='text-yellow-light'
              bglabel='bg-yellow-light'
              textlabel='text-blue-default'/>
            <ProjectIcon 
              title="We're working on it!"
              sub='More to come soon'
              page='/projects'
              bg='bg-yellow-default'
              text='text-yellow-dark'
              bglabel=''
              textlabel=''/>
        </div>
      </div>

      <div className='text-center pt-24 pb-32 space-y-7'>
          <p className='text-4xl text-blue-text font-dm font-semibold tracking-tight'>Find out what got me here!</p>
          <div>
            <Link className='text-xl bg-blue-dark border-2 border-solid border-blue-dark text-yellow-bg hover:bg-yellow-bg hover:text-blue-dark font-dm font-medium rounded-2xl px-8 py-3' href='/profile'>About Me</Link>
          </div>
        </div>
      </div>
  )
}

export default projects
