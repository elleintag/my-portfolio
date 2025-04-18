import React from 'react'
import Image from 'next/image'

const TextSide = ({headerText='header text', subText='description text'}) => {
  return (
    <div className='px-24 w-9/12 mt-20 mb-36 space-y-10'>
        <div className='flex items-center relative'>
          <div className='text-blue-dark text-left space-y-3'>
              <p className='text-5xl font-dm font-semibold tracking-tighter'>{headerText}</p>
              <div className='w-2/3'>
                <p className='text-2xl text-blue-default font-dm italic'>{subText}</p>
              </div>
              <div className='py-5'>
                <a className='bg-blue-dark border-2 border-solid border-blue-dark text-yellow-light hover:bg-yellow-bg hover:text-blue-dark text-xl font-dm font-regular tracking-tight rounded-2xl px-6 py-2' href='https://www.linkedin.com/in/joelle-lintag/' target='_blank'>Let&apos;s Chat</a>
              </div>
          </div>
          <Image
            alt="Yellow Clover"
            src={"/assets/svgs/clover-yellow.svg"}
            height={600}
            width={600}
            className="absolute translate-x-158 translate-y-32 -z-20"
            unoptimized
          />
          <Image
            alt="Blue Yippee"
            src={"/assets/svgs/yippee-blue.svg"}
            height={160}
            width={160}
            className="absolute -right-96 translate-y-12 -z-20 rotate-[]"
            unoptimized
          />
        </div>
    </div>
  )
}

export default TextSide
