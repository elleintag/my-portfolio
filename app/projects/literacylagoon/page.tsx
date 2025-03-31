import Approach from '@/components/project-page/Approach'
import Goals from '@/components/project-page/Goals'
import Header from '@/components/project-page/Header'
import Introduction from '@/components/project-page/Introduction'
import Photos from '@/components/project-page/Photos'
import MoreFromMe from '@/components/MoreFromMe'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LiteracyLagoon = () => {
  return (
    <div className='mx-auto max-w-[1440px]'>
      <Header
        Title='Literacy Lagoon'
        Description='UX/UI App Design'
        Label_1='Research'
        Label_2='UX/UI Design'
        Collab="Human Computer Interaction at Queen's University"
      />
        
      <Introduction
        Intro='Research indicates that one of the best solutions to the challenge of teaching literacy to primary school children is the use of systematic phonic-based learning. However, with the advancement of technology and online learning, children are quickly adapting to digital interfaces and tend to memorize words rather than use traditional decoding strategies. Literacy Lagoon was conceptualized to provide a space for classroom learning techniques to be implemented through an online platform with minimal parental guidance. This project is a simple prototype that outlines the differences and similarities in design for children, and their parents.'
        img='/assets/literacylagoon/literacylagoon.png'
        // Caption='Samples of bobbin lace from early in research.'
        />
      
      <Goals 
        Goal_1='Keep children captivated and focused on app activities and lessons without compromising their screen time.'
        Goal_2='Prioritize the importance of progress, and ensure that each child is able to learn at their own pace.'
        Goal_3='Provide a space for parents to track their child’s progress and learn more about how they can support their child.'
      />

      <div className='px-12 pb-12 space-y-5'>
        <div className='flex flex-col items-center'>
          <Image
            alt='Proposal Diagram'
            src='/assets/literacylagoon/proposal-diagram.png'
            height={285}
            width={730}
            unoptimized
          />   
        </div>
        <div className='items-start'>
            <p className='text-lg text-blue-text font-dm font-light italic tracking-tight'>Caption about proposal diagram</p>
        </div>   
      </div>

      <Photos 
        img_1='/assets/literacylagoon/lofi-1.png'
        img_2='/assets/literacylagoon/lofi-2.png'
        img_3='/assets/literacylagoon/lofi-3.png'
        alt_1='Low Fidelity Design'
        alt_2='Low Fidelity Design'
        alt_3='Low Fidelity Design'
        Caption='Scans of sample book curated with all prototypes throughout research.'
      />

      <div className='py-12'>
        <Photos
          img_1='/assets/literacylagoon/hifi-1.png'
          img_2='/assets/literacylagoon/hifi-2.png'
          img_3='/assets/literacylagoon/hifi-3.png'
          alt_1='High Fidelity Design'
          alt_2='High Fidelity Design'
          alt_3='High Fidelity Design'
          Caption='Scans of sample book curated with all prototypes throughout research.'
        />
      </div>

      <Approach 
        Approach='Our prototyping process began by developing the aquatic theme and sketching out an initial layout of the app’s workflow. We highlighted various elements, such as buttons, colour, and characters to ensure that children would have simple user interactions and instructions through the development of accurate user characterizations and scenarios. Each prototype, from pen and paper to our final design, had gone through several rounds of user testing and interviews, with feedback being implemented throughout the process.'
        img='/assets/literacylagoon/testing.png'
        Caption='Caption about user testing'
      />

      <div className='pt-12'>
        <Photos 
          img_1='/assets/literacylagoon/parent-1.png'
          img_2='/assets/literacylagoon/parent-2.png'
          img_3='/assets/literacylagoon/parent-3.png'
          alt_1='High Fidelity Design for Parents'
          alt_2='High Fidelity Design for Parents'
          alt_3='High Fidelity Design for Parents'
          Caption='Scans of sample book curated with all prototypes throughout research.'
        />
      </div>

      <div className="py-24 space-y-5">
        <p className="text-2xl text-center text-blue-dark font-dm font-semibold tracking-tight">
            Try out the prototype here!
        </p>
        <div className='flex flex-col items-center'>
          <Link
              className="bg-blue-default border-solid border-2 border-blue-default text-xl text-center text-yellow-bg hover:bg-yellow-bg hover:text-blue-default font-dm font-normal tracking-tight rounded-2xl px-8 py-1.5"
              href="https://www.figma.com/proto/gc50kMLsPliCawPkoZ0foP/Hi-Fi-Design?page-id=0%3A1&node-id=17-14002&p=f&viewport=-48%2C635%2C0.13&t=MXjJTvh7XAQlubmf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=17%3A14002"
              target="_blank"
          >
              Try It
          </Link> 
        </div>
      </div>

      <MoreFromMe
        project_1="Interactive Bobbin Lace"
        sub_1="Undergraduate Capston Research"
        page_1="/projects/bobbinlace"
        project_2="Mootate"
        sub_2="2D Game Development"
        page_2="/projects/mootate"
        project_3="Women in Science & Engineering"
        sub_3="Marketing & Design"
        page_3="/projects/wise"
      />
    </div>
  )
}

export default LiteracyLagoon
