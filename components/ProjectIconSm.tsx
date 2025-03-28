import React from 'react'
import Link from 'next/link'
import ProjectLabel from './ProjectLabel'

const ProjectIcon = ({title='Project Title', sub='Project Description', page='/page', bg='', text=''}) => {
  return (
    <Link className={`max-w-screen-xl rounded-2xl ${bg} ${text}`} href={page}>
          <div className='mt-60 p-6'>
              <div className='text-2xl font-dm font-medium tracking-tighter'><p>{title}</p></div>
              <div className='text-lg font-dm italic tracking-tighter'><p>{sub}</p></div>
          </div>
    </Link>
  )
}

export default ProjectIcon
