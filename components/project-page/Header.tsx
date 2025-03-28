import React from 'react'
import Image from "next/image"

const Header = ({Title='Title', Description='Description', Label_1='Label', Label_2='Label', Collab='Collaboration'}) => {
  return (
    <div>
        <div className='text-center space-y-3 mt-114 relative'>
          <p className='text-6xl text-blue-dark font-dm font-semibold tracking-tighter'>{Title}</p>
          <p className='text-3xl pb-12 text-blue-default font-dm italic tracking-tighter'>{Description}</p>
          <Image
              alt="Clover1"
              src={"../assets/svgs/clover.svg"}
              height={600}
              width={600}
              className="absolute -top-168 -left-16 -z-10 rotate-[48deg]"
              unoptimized
          />
          <Image
              alt="Clover2"
              src={"../assets/svgs/clover.svg"}
              height={575}
              width={575}
              className="absolute -top-144 -right-28 -z-10 rotate-[32deg]"
              unoptimized
          />
          <Image
              alt="Yippee"
              src={"../assets/svgs/yippee.svg"}
              height={200}
              width={200}
              className="absolute -top-90 left-160 -z-10 rotate-[230deg]"
              unoptimized
          />
          <Image
              alt="Loops"
              src={"../assets/svgs/loops-2.svg"}
              height={575}
              width={575}
              className="absolute -top-80 -left-20 -z-10 rotate-[-200deg]"
              unoptimized
          />
          <Image
              alt="Squiggle"
              src={"../assets/svgs/squiggle-long.svg"}
              height={700}
              width={700}
              className="absolute bottom-96 -right-24 -z-10"
              unoptimized
          />
        </div>

        <div className='px-12 pb-10 flex justify-between items-center'>
            <div className='flex space-x-3'>
                <p className='text-xl border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>{Label_1}</p>
                <p className='text-xl border-solid bg-green border-green text-yellow-bg font-dm font-normal tracking-tight rounded-xl px-6 py-1'>{Label_2}</p>
            </div>
            <div>
                <p className='text-2xl text-yellow-dark font-dm font-normal tracking-tight'>{Collab}</p>
            </div>
        </div>
    </div>
  )
}

export default Header
