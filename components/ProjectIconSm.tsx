import React from 'react'
import Link from 'next/link'
import ProjectLabel from './ProjectLabel'

const ProjectIcon = ({title='Project Title', sub='Project Description', page='/page', bg='', text=''}) => {
  return (
    <Link className={`max-w-screen-xl rounded-2xl ${bg} ${text}`} href={page}>
          <div className='mt-60 p-6'>
              <div className='text-3xl font-dg font-medium tracking-tight'><p>{title}</p></div>
              <div className='text-xl font-ct italic tracking-tight'><p>{sub}</p></div>
          </div>
    </Link>
  )
}

export default ProjectIcon
