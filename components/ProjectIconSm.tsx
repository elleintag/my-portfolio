import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectIconSm = ({title='Project Title', sub='Project Description', page='/page', bg='', text='', icon=''}) => {
  return (
    <Link className={`rounded-2xl ${bg} ${text}`} href={page}>
          <div className='p-6 flex flex-col content-start'>
            <div className='pb-36 flex justify-end'>
              <Image 
                alt='Icon'
                src={icon}
                height={80}
                width={80}
                unoptimized
              />
            </div>
            <div className='text-2xl font-dm font-medium tracking-tight'><p>{title}</p></div>
            <div className='text-lg font-dm italic tracking-tight'><p>{sub}</p></div>
          </div>
    </Link>
  )
}

export default ProjectIconSm
