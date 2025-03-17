import React from 'react'
import Link from 'next/link'
import ProjectLabel from './ProjectLabel'

const ProjectIcon = ({title='Project Title', sub='Project Description', page='/page', label_1='', label_2='', label_3='', bg='', text='', bglabel='', textlabel=''}) => {
  return (
    <Link className={`max-w-screen-xl rounded-2xl ${bg} ${text}`} href={page}>
        <div className='mt-80 p-6'>
            <div className='text-3xl font-dm font-medium tracking-tight'><p>{title}</p></div>
            <div className='text-xl font-dm font-normal italic tracking-tight'><p>{sub}</p></div>
            <div className='flex py-2 space-x-2'>
              {label_1 && (
                <p className={`text-sm font-dm font-normal tracking-tighter border-solid ${bglabel} ${textlabel} rounded-xl px-4 py-1`}>
                  {label_1}
                </p>
              )}
              {label_2 && (
                <p className={`text-sm font-dm font-normal tracking-tighter border-solid ${bglabel} ${textlabel} rounded-xl px-4 py-1`}>
                  {label_2}
                </p>
              )}
              {label_3 && (
                <p className={`text-sm font-dm font-nromal tracking-tighter border-solid ${bglabel} ${textlabel} rounded-xl px-4 py-1`}>
                  {label_3}
                </p>
              )}
            </div>
        </div>
    </Link>
  )
}

export default ProjectIcon
