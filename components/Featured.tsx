import React from 'react'
import Link from 'next/link'
import ProjectIcon from './ProjectIcon'

const Featured = () => {
  return (
    <div className='mx-auto px-10'>
        <div className='tracking-tight'>
            <p className='text-5xl text-center text-blue-dark font-dm font-semibold tracking-tighter py-3'>Featured Projects</p>
            <p className='text-2xl text-center text-blue-default font-dm font-normal italic pb-10'>A little bit of design here, a little research there, with everything in between</p>
        </div>
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
              sub='Branding & Design'
              page='/projects/wise'
              label_1='Graphic Design'
              label_2='Social Media'
              bg='bg-blue-default'
              text='text-yellow-light'
              bglabel='bg-yellow-light'
              textlabel='text-blue-default'/> 
        </div>
        <div className='text-center text-blue-text font-dm tracking-tighter py-16'>
            <p className='text-3xl font-semibold'>Don't worry, there's more!</p>
            <div className='mt-7'>
                <Link className='border-solid border-2 border-blue-text text-blue-text hover:bg-blue-text hover:text-yellow-bg text-xl font-medium rounded-2xl px-8 py-2' href='/projects'>See More</Link>
            </div>
        </div>
    </div>
  )
}

export default Featured
