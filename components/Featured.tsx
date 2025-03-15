import React from 'react'
import Link from 'next/link'
import ProjectIcon from './ProjectIcon'

const Featured = () => {
  return (
    <div className='mx-auto px-10'>
        <div className='text-black'>
            <p className='text-4xl text-center font-bold py-3'>Featured Projects</p>
            <p className='text-lg text-center italic pb-10'>Some of my favourites! Check them out below.</p>
        </div>
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
            <ProjectIcon 
              title='Literacy Lagoon'
              sub='UX/UI App Design Project'
              page='/projects/literacylagoon'
              label_1='Research'
              label_2='Design System'/>
            <ProjectIcon 
              title='Literacy Lagoon'
              sub='UX/UI App Design Project'
              page='/projects/literacylagoon'
              label_1='Research'
              label_2='Design System'/> 
        </div>
        <div className='text-center py-16'>
            <p className='text-2xl'>Don't worry, there's more!</p>
            <div className='mt-7'>
                <Link className='border-solid border-2 border-black text-black rounded-xl px-8 py-3' href='/projects'>See More</Link>
            </div>
        </div>
    </div>
  )
}

export default Featured
