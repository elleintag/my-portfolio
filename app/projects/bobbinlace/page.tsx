import React from 'react'

const bobbinlace = () => {
  return (
    <div className='pt-64 pb-12'>
      <div className='text-center py-10 space-y-3'>
          <p className='text-5xl font-bold'>Interactive Bobbin Lace</p>
          <p className='text-xl italic'>Undergraduate Capstone Research Project</p>
      </div>
      <div className='px-12 pb-10 flex justify-between'>
        <div className='flex space-x-3'>
          <p className='text-md border-solid bg-black border-black text-white rounded-xl px-6 py-1'>Research</p>
          <p className='text-md border-solid bg-black border-black text-white rounded-xl px-6 py-1'>Development</p>
        </div>
        <div>
          <p className='text-lg'>In collaboration with the iStudio Lab at Queen's University</p>
        </div>
      </div>
      <div className='p-24 bg-blue-100 flex justify-between'>
        <div className='w-1/2 space-y-3'>
          <p className='text-4xl font-bold'>Introduction</p>
          <p className='text-lg'>Bobbin lace is a traditional lace textile that is created by a pattern of twisting and knotting of thread wound around several bobbins. Its development and creation can be seen within textiles and fashion throughout history, and is an intricate form of textile art practiced today. As such a delicate textile, the introduction of electronic components and user interaction within bobbin lace is unheard of. Interactive Bobbin Lace is the result of the foundational research towards this newfound development, and its potential impact within the electronic textile (e-textile) industry.</p>
        </div>
        <div className=''>
          <div className='bg-blue-200'>photo</div>
          <p className='text-sm'>Samples of bobbin lace from early in research</p>
        </div>
      </div>

      <div className='px-24 py-20'>
        <p className='text-4xl font-bold'>Goals</p>
        <div className='px-16 py-8 space-y-8 text-xl'>
          <p>Produce a sample book showcasing all research, prototypes, and samples throughout the project.</p>
          <p>Develop methods to implement existing e-textile components within the creation of bobbin lace.</p>
          <p>Create a Living Lace Sample prototype that successfully incorporates both the research of traditional bobbin lace methods and existing e-textile components.</p>
        </div>
      </div>

    </div>
  )
}

export default bobbinlace
