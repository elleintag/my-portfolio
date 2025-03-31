import Approach from '@/components/project-page/Approach'
import Goals from '@/components/project-page/Goals'
import Header from '@/components/project-page/Header'
import Introduction from '@/components/project-page/Introduction'
import Photos from '@/components/project-page/Photos'
import MoreFromMe from '@/components/MoreFromMe'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Mootate = () => {
  return (
    <div className='mx-auto max-w-[1440px]'>
      <Header
        Title='Mootate'
        Description='2D Game Development'
        Label_1='Development'
        Label_2='Game Design'
        Collab="Game Design at Queen&apos;s University"
      />
        
      <Introduction
        Intro="Mootate is a logical, strategy-based 2D top-down game during an unusual day at the farm when the animals become violent and it&apos;s up to you, the farmer, to transform into different animals to avoid getting attacked and find the alarm to calm the animals down. Dangerous animals will only attack certain enemies in each round. You can keep track of each animal&apos;s enemy in the legend on the screen. Don&apos;t get attacked, and keep looking for the alarm before time runs out!."
        img='/assets/mootate/mootate.png'
        Caption=''
        />
      
      <Goals 
        Goal_1='Develop sprite movement, randomized spawning, and cooldown according to gameplay.'
        Goal_2='Establish and maintain the game&apos;s objective, graphics, and mechanics throughout the user&apos;s entire experience.'
        Goal_3='Ensure the game is accessible to a wide audience in both gameplay and availability.'
      />

      <Photos 
        img_1='/assets/mootate/assets-1.png'
        img_2='/assets/mootate/assets-2.png'
        img_3='/assets/mootate/assets-3.png'
        alt_1='UI Assets'
        alt_2='UI Assets'
        alt_3='UI Assets'
        Caption='Caption about UI assets'
      />

      <div className='py-12'>
        <Photos
          img_1='/assets/mootate/gameplay-1.gif'
          img_2='/assets/mootate/gameplay-2.gif'
          img_3='/assets/mootate/gameplay-3.gif'
          alt_1='Gameplay'
          alt_2='Gameplay'
          alt_3='Gameplay'
          Caption='Caption about gameplay'
        />
      </div>

      <div className="px-24 py-12 rounded-xl bg-yellow-light flex flex-row">
        <div className="w-3/5 space-y-5 h-full pr-16 self-center">
            <p className="text-6xl text-blue-dark font-dm font-semibold tracking-tight">
                Approach
            </p>
            <p className="text-lg text-blue-text font-dm font-light tracking-tight">
              Before the graphics of the game was established, our team focused on developing randomized sprite movement based on a random path selection. Map boundaries had to be established to prevent both players and sprites from moving off the playable map. Our team settled on a cozy, yet challenging theme for the game that is carried throughout the game art and interface graphics. Each stage of development included user testing and feedback, resulting in various changes within gameplay and strategy development that continuously improved the game even into its final version.
            </p>
            <p className="text-xl text-blue-default font-dm font-normal italic tracking-tight leading-tight py-5">
                Mootate was also previously featured at the Queen&apos;s University Creative Computing Showcase!
            </p>
        </div>
        <div className="w-2/5 h-full flex flex-col items-start">
            <div className="w-full h-full">
              <Image 
                alt="Mootate Showcase"
                src='/assets/mootate/presentation.png'
                height={500}
                width={500}
                unoptimized
              />
            </div>
            <p className="text-lg text-blue-text font-dm italic tracking-tight leading-tight py-3">
                Caption about presenting
            </p>
        </div>
      </div>

      <div className="pt-16 pb-24 space-y-5">
        <p className="text-2xl text-center text-blue-dark font-dm font-semibold tracking-tight">
            Play Mootate for free online!
        </p>
        <div className='flex flex-col items-center'>
          <Link
              className="bg-blue-default border-solid border-2 border-blue-default text-xl text-center text-yellow-bg hover:bg-yellow-bg hover:text-blue-default font-dm font-normal tracking-tight rounded-2xl px-8 py-1.5"
              href="https://serenae.itch.io/transfarmer"
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
        project_2="Literacy Lagoon"
        sub_2="UX/UI App Design"
        page_2="/projects/literacylagoon"
        project_3="Women in Science & Engineering"
        sub_3="Marketing & Design"
        page_3="/projects/wise"
      />
    </div>
  )
}

export default Mootate
