import React from 'react'
import Image from 'next/image'

const Approach = ({Approach='Approach Text', img='/assets/', alt='alt-text', Caption='Caption'}) => {
  return (
    <div className="px-24 py-12 rounded-xl bg-yellow-light flex justify-evenly">
            <div className="w-3/5 h-full space-y-5 pr-16 self-center">
                <p className="text-6xl text-blue-dark font-dm font-semibold tracking-tight">
                    Approach
                </p>
                <p className="text-xl text-blue-text font-dm font-light tracking-tight">
                    {Approach}
                </p>
            </div>
            <div className="w-2/5 h-full space-y-3">
              <div className="w-full h-full">
                <Image 
                    alt={alt}
                    src={img}
                    height={500}
                    width={500}
                    unoptimized
                />
              </div>
                <p className="text-xl text-blue-dark font-dm font-light italic tracking-tight px-2 py-3">
                    {Caption}
                </p>
            </div>
    </div>
  )
}

export default Approach
