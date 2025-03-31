import Approach from '@/components/project-page/Approach'
import Goals from '@/components/project-page/Goals'
import Header from '@/components/project-page/Header'
import Introduction from '@/components/project-page/Introduction'
import Photos from '@/components/project-page/Photos'
import MoreFromMe from '@/components/MoreFromMe'
import React from 'react'

const htbw = () => {
  return (
    <div className='mx-auto max-w-[1440px]'>
      <Header
        Title='How to be WiSE Podcast'
        Description='Branding & Design Project'
        Label_1='Branding'
        Label_2='Social Media'
        Collab="For Women in Science & Engineering - Queen&apos;s University Chapter"
      />
        
      <Introduction
        Intro='The How to be WiSE (HTBW) podcast is a proud communications initiative of the Queen&apos;s University Women in Science and Engineering Chapter (WiSE). From interviews with top executives and young professionals to undergraduate students like us, each HTBW episode highlights the diversity and extraordinary female experience in STEM. The rebranding of HTBW is another extension of WiSE&apos;s aim to advocate for women and girls in STEM spaces, and ensure their thoughts and voices are heard.'
        // img='/assets/bobbinlace/bobbinlace-intro.png'
        // Caption='Samples of bobbin lace from early in research.'/>
        />
      
      <Goals 
        Goal_1='Develop a simple and accessible brand kit that can be easily understood by any member of the team.'
        Goal_2='Ensure that the HTBW brand is independent and unique, but cohesive and can be easily associated with the overall WiSE brand.'
        Goal_3='ADD ANOTHER GOAL'
      />

      {/* <Photos 
        img_1='/assets/bobbinlace/samplebook-1.png'
        img_2='/assets/bobbinlace/samplebook-2.png'
        img_3='/assets/bobbinlace/samplebook-3.png'
        Caption='Scans of sample book curated with all prototypes throughout research.'/>
      /> */}

      <div className='py-24'>
        <Photos
          // img_1='/assets/bobbinlace/final-1.png'
          // img_2='/assets/bobbinlace/final-2.png'
          // img_3='/assets/bobbinlace/final-3.png'
          // Caption='Creation process of Living Lace Sample -- a bobbin lace potentiometer. Includes prototyping, pattern, and Arduino code for functionality.'/>
        />
      </div>

      <Approach 
        Approach='My vision for this brand had been a journal style, as a way to document all the different female experiences in STEM. Many realistic entities such as cut out photos and photostrips, tape, and other miscellaneous objects can be found throughout the design. However, the main challenge behind this project was ensuring that even with a complex and flexible brand identity, the brand could still be accessible to any member of the team. To combat this, the brand kit included core design principles and how they can be used in various graphics, along with a detailed explanation of the brand in action.'
        // img='/assets/bobbinlace/bobbinlace-intro.png'
        // Caption='Samples of bobbin lace from early in research.'/>
      />

      <div className='py-24'>
        {/* <Photos 
          // img_1='/assets/bobbinlace/showcase-1.png'
          // img_2='/assets/bobbinlace/showcase-2.png'
          // img_3='/assets/bobbinlace/showcase-3.png'
          // Caption='Creation process of Living Lace Sample -- a bobbin lace potentiometer. Includes prototyping, pattern, and Arduino code for functionality.'/>
        /> */}
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

export default htbw
