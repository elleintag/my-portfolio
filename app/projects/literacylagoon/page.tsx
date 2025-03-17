import Approach from '@/components/project-page/Approach'
import Goals from '@/components/project-page/Goals'
import Header from '@/components/project-page/Header'
import Introduction from '@/components/project-page/Introduction'
import Photos from '@/components/project-page/Photos'
import ProjectIconSm from '@/components/ProjectIconSm'
import React from 'react'

const LiteracyLagoon = () => {
  return (
    <div className='pt-64'>
      <Header
        // Title='Interactive Bobbin Lace'
        // Description='Undergraduate Capstone Research Project'
        // Label_1='Research'
        // Label_2='Development'
        // Collab="In collaboration with the iStudio Lab at Queen's University"/>
      />
        
      <Introduction
        // Intro='Bobbin lace is a traditional lace textile that is created by a pattern of twisting and knotting of thread wound around several bobbins. Its development and creation can be seen within textiles and fashion throughout history, and is an intricate form of textile art practiced today. As such a delicate textile, the introduction of electronic components and user interaction within bobbin lace is unheard of. Interactive Bobbin Lace is the result of the foundational research towards this newfound development, and its potential impact within the electronic textile (e-textile) industry.'
        // img='/assets/bobbinlace/bobbinlace-intro.png'
        // Caption='Samples of bobbin lace from early in research.'/>
        />
      
      <Goals 
        // Goal_1='Produce a sample book showcasing all research, prototypes, and samples throughout the project.'
        // Goal_2='Develop methods to implement existing e-textile components within the creation of bobbin lace.'
        // Goal_3='Create a Living Lace Sample prototype that successfully incorporates both the research of traditional bobbin lace methods and existing e-textile components.'/>
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

      <Approach />

      <div className='py-24'>
        <Photos 
          // img_1='/assets/bobbinlace/showcase-1.png'
          // img_2='/assets/bobbinlace/showcase-2.png'
          // img_3='/assets/bobbinlace/showcase-3.png'
          // Caption='Creation process of Living Lace Sample -- a bobbin lace potentiometer. Includes prototyping, pattern, and Arduino code for functionality.'/>
        />
      </div>

      <div className='bg-blue-100 py-16 px-6 space-y-16'>
        <p className='text-6xl text-center text-blue-dark font-dg font-semibold tracking-tight'>More From Me</p>
        <div className='grid grid-cols-3 gap-5'>
              <ProjectIconSm 
                title='Interactive Bobbin Lace'
                sub='Undergraduate Capstone Research Project'
                page='/projects/bobbinlace'
                bg='bg-green'
                text='text-yellow-bg'/>
              <ProjectIconSm
                title='Literacy Lagoon'
                sub='UX/UI App Design'
                page='/projects/literacylagoon'
                bg='bg-blue-default'
                text='text-blue-dark'/>
              <ProjectIconSm 
                title='Women in Science & Engineering'
                sub='Branding & Marketing'
                page='/projects/wise'
                bg='bg-yellow-default'
                text='text-yellow-dark'/>
          </div>
      </div>
    </div>
  )
}

export default LiteracyLagoon
