import Approach from '@/components/project-page/Approach'
import Goals from '@/components/project-page/Goals'
import Header from '@/components/project-page/Header'
import MoreFromMe from '@/components/MoreFromMe'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const wise = () => {
  return (
    <div className='mx-auto max-w-[1440px]'>
      <Header
        Title='Women in Science & Engineering'
        Description='Branding & Design'
        Label_1='Marketing'
        Label_2='Design'
        Collab=" For Women in Science & Engineering - Queen's University Chapter"
        />
      
      <div className="rounded-xl bg-yellow-light flex flex-row">
        <div className="px-24 py-12 w-2/3 h-full space-y-5 pr-16 self-center">
          <p className="text-6xl text-blue-dark font-dm font-semibold tracking-tight">
              Introduction
          </p>
          <p className="text-xl text-blue-text font-dm font-light tracking-tight">
            Women in Science and Engineering (WiSE) was established at Queen&apos;s University with a simple mission in mind: to promote and advocate the involvement of females in STEM fields. We strive to bring each other up, work together towards the same goals, and inspire the next generation of girls to do the same. Prior to 2021, WiSE did not have a specific direction for marketing or design. I stepped into the role of Marketing Director leading with my vision of creating a unique brand kit to optimize the design and marketing process moving forward. With a professional and consistent design, the WiSE rebranding project brings a brand-new way to showcase our mission, and to extend our reach to even more women and girls, just like us.
          </p>
        </div>
        <div className="w-1/3 h-full">
          <Image 
            alt="photo"
            src="/assets/wise/intro.png"
            width="662"  
            height="675"
          />
        </div>
      </div>
      
      <Goals 
        Goal_1='Develop a simple and accessible brand kit that can be easily understood by any member of the team.'
        Goal_2='Ensure that each piece of media, marketing, and merchandise is cohesive and united by the WiSE brand.'
        Goal_3='Create a new logo that fits both the professional and modern focus of the team&apos;s initiatives and events.'
      />

      <div className="py-12 w-full">
        <Image 
          alt="wise"
          src="/assets/wise/brandkit.png"
          width="1440"
          height="530"
        />
      </div>

      <div className="pb-16 w-full">
        <Image 
          alt="wise"
          src="/assets/wise/media.png"
          width="1440"
          height="1180"
        />
      </div>

      <Approach 
        Approach='One of the most foundational steps of this project is found in the research I had done to initially develop the vision of the brand. Much of this research was focused on various brands and other entities that were capturing the attention of female university students. From here, I began to develop various versions of assets and marketing layouts that could easily be mixed and matched based on the event or portfolio being promoted. After regular meetings with the executive team for feedback discussions and goal revision, the WiSE brand was established and is continuously taught to new incoming teams year after year.'
        img='/assets/wise/promo.png'
        Caption=''/>

        <div className="pt-36 pb-40 px-72 space-y-5">
          <p className="text-4xl text-center text-blue-dark font-dm font-semibold tracking-tight">
              Even more WiSE!
          </p>
          <p className="text-xl text-center text-blue-dark font-dm tracking-tight">
              Established in 1990, Queen&apos;s WiSE is a student-run organization committed to promoting and advocating for the involvement of all women in STEM. Our mission has always been to inspire, educate, and collaborate to promote & accelerate diversity in STEM industries. Learn more about this amazing team and their initiatives below!
          </p>
          <div className="pt-5 space-x-5 flex justify-center">
              <Link
                  className="bg-blue-default border-solid border-2 border-blue-default text-xl text-yellow-bg hover:bg-yellow-bg hover:text-blue-default font-dm font-normal tracking-tight rounded-2xl px-7 py-1.5"
                  href="https://www.instagram.com/queenswise/?hl=en"
                  target="_blank"
              >
                  Instagram
              </Link>
              <Link
                  className="bg-blue-default border-solid border-2 border-blue-default text-xl text-yellow-bg hover:bg-yellow-bg hover:text-blue-default font-dm font-normal tracking-tight rounded-2xl px-7 py-1.5"
                  href="https://queenswise.ca/"
                  target="_blank"
              >
                  Website
              </Link>
              <Link
                  className="bg-blue-default border-solid border-2 border-blue-default text-xl text-yellow-bg hover:bg-yellow-bg hover:text-blue-default font-dm font-normal tracking-tight rounded-2xl px-7 py-1.5"
                  href="https://www.linkedin.com/company/women-in-science-and-engineering-wise-queen-s-university-chapter"
                  target="_blank"
              >
                  LinkedIn
              </Link>
          </div>
      </div>

      <MoreFromMe
        project_1="Literacy Lagoon"
        sub_1="UX/UI App Design"
        page_1="/projects/literacylagoon"
        project_2="Women in Science & Engineering"
        sub_2="Branding & Design"
        page_2="/projects/wise"
        project_3="Mootate"
        sub_3="2D Game Development"
        page_3="/projects/mootate"
      />
    </div>
  )
}

export default wise
