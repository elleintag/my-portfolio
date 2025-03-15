import React from 'react'
import Link from 'next/link'
import ProjectLabel from './ProjectLabel'

const ProjectIcon = ({title='Project Title', sub='Project Description', page='/page', label_1='', label_2='', label_3=''}) => {
  return (
    <Link className='max-w-screen-xl rounded-2xl bg-black text-white' href={page}>
          <div className='mt-80 p-6'>
              <div className='text-2xl'><p>{title}</p></div>
              <div className='text-lg italic'><p>{sub}</p></div>
              <div className='flex py-2 space-x-2'>
                {label_1 && <ProjectLabel Label={label_1} />}
                {label_2 && <ProjectLabel Label={label_2} />}
                {label_3 && <ProjectLabel Label={label_3} />}
              </div>
          </div>
    </Link>
  )
}

export default ProjectIcon
