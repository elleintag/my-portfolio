import Approach from '@/components/project-page/Approach'
import Goals from '@/components/project-page/Goals'
import Header from '@/components/project-page/Header'
import Introduction from '@/components/project-page/Introduction'
import Photos from '@/components/project-page/Photos'
import MoreFromMe from '@/components/MoreFromMe'
import React from 'react'

const wise = () => {
  return (
    <div className='mx-auto max-w-[1440px]'>
      <Header
        Title='Women in Science & Engineering'
        Description='Branding & Design Initiative'
        Label_1='Branding'
        Label_2='Social Media'
        Collab=" For Women in Science & Engineering - Queen's University Chapter"
        />
        
      <Introduction
        Intro='Women in Science and Engineering (WiSE) was established at Queen&apos;s University with a simple mission in mind: to promote and advocate the involvement of females in STEM fields. We strive to bring each other up, work together towards the same goals, and inspire the next generation of girls to do the same. With a professional and consistent design, the WiSE rebranding project brings a brand-new way to showcase our mission, and to extend our reach to even more women and girls, just like us.'
        // img='/assets/bobbinlace/bobbinlace-intro.png'
        // Caption='Samples of bobbin lace from early in research.'/>
        />
      
      <Goals 
        Goal_1='Develop a simple and accessible brand kit that can be easily understood by any member of the team.'
        Goal_2='Ensure that each piece of media, marketing, and merchandise is cohesive and united by the WiSE brand.'
        Goal_3='Create a new logo that fits both the professional and modern focus of the team&apos;s initiatives and events.'
      />

      <Photos 
        // img_1='/assets/bobbinlace/samplebook-1.png'
        // img_2='/assets/bobbinlace/samplebook-2.png'
        // img_3='/assets/bobbinlace/samplebook-3.png'
        // Caption='Scans of sample book curated with all prototypes throughout research.'/>
      />

      <div className='py-24'>
        <Photos
          // img_1='/assets/bobbinlace/final-1.png'
          // img_2='/assets/bobbinlace/final-2.png'
          // img_3='/assets/bobbinlace/final-3.png'
          // Caption='Creation process of Living Lace Sample -- a bobbin lace potentiometer. Includes prototyping, pattern, and Arduino code for functionality.'/>
        />
      </div>

      <Approach 
        Approach='One of the most foundational steps of this project is found in the research I had done to initially develop the vision of the brand. Much of this research was focused on various brands and other entities that were capturing the attention of female university students. From here, I had begun to d evelop various versions of assets and marketing layouts that could easily be mixed and matched based on the event or portfolio being promoted. After regular meetings with the executive team for feedback discussions and goal revision, the WiSE brand was established and is continuously taught to incoming teams year after year.'
        // img='/assets/bobbinlace/bobbinlace-intro.png'
        // Caption='Samples of bobbin lace from early in research.'/>
      />

      <div className='py-24'>
        <Photos 
          // img_1='/assets/bobbinlace/showcase-1.png'
          // img_2='/assets/bobbinlace/showcase-2.png'
          // img_3='/assets/bobbinlace/showcase-3.png'
          // Caption='Creation process of Living Lace Sample -- a bobbin lace potentiometer. Includes prototyping, pattern, and Arduino code for functionality.'/>
        />
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
