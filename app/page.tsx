import React from 'react'
import Featured from '@/components/Featured'
import Text from '@/components/Text'
import TextSide from '@/components/TextSide'
import HomeHeader from '@/components/HomeHeader'

const home = () => {
  return (
    <main>
      <div className=''>
        <HomeHeader 
          header="Hi! I'm Joelle!"
          sub=""/>
        <Featured />
        <TextSide 
          headerText='We should talk!'
          subText='I am currently looking for new roles and responsibilities. I would love to connect!'
        />
      </div>
    </main>
  )
}

export default home