import React from 'react'
import ProjectIconSm from '@/components/ProjectIconSm'

const MoreFromMe = (
  {
    project_1,
    sub_1,
    page_1,
    project_2,
    sub_2,
    page_2,
    project_3,
    sub_3,
    page_3

  }:
  {
    project_1: string,
    sub_1: string,
    page_1: string,
    project_2: string,
    sub_2: string,
    page_2: string,
    project_3: string,
    sub_3: string,
    page_3: string
  }
) => {
  return (
    <div className="bg-[#E7EEFF] py-16 px-6 mx-5 mb-2 space-y-12 rounded-xl">
        <p className="text-5xl text-center text-blue-dark font-dm font-semibold tracking-tighter">
            More From Me
        </p>
        <div className="grid grid-cols-3 gap-5">
            <ProjectIconSm
                title={project_1}
                sub={sub_1}
                page={page_1}
                bg="bg-green"
                text="text-yellow-bg"
                icon='/assets/svgs/badge-sm.svg'
            />
            <ProjectIconSm
                title={project_2}
                sub={sub_2}
                page={page_2}
                bg="bg-blue-default"
                text="text-blue-dark"
                icon='/assets/svgs/clover-sm.svg'
            />
            <ProjectIconSm
                title={project_3}
                sub={sub_3}
                page={page_3}
                bg="bg-yellow-default"
                text="text-yellow-dark"
                icon='/assets/svgs/flower-sm.svg'
            />
        </div>
    </div>
  )
}

export default MoreFromMe
