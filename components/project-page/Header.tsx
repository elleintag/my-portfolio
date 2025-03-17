import React from 'react'

const Header = ({Title='Title', Description='Description', Label_1='Label', Label_2='Label', Collab='Collaboration'}) => {
  return (
    <div>
        <div className='text-center py-10 space-y-3'>
          <p className='text-6xl text-blue-dark font-dg font-semibold tracking-tight'>{Title}</p>
          <p className='text-3xl text-blue-default font-ct italic'>{Description}</p>
        </div>

        <div className='px-12 pb-10 flex justify-between items-center'>
            <div className='flex space-x-3'>
                <p className='text-xl border-solid bg-green border-green text-yellow-bg font-dg font-medium tracking-tight rounded-xl px-6 py-1'>{Label_1}</p>
                <p className='text-xl border-solid bg-green border-green text-yellow-bg font-dg font-medium tracking-tight rounded-xl px-6 py-1'>{Label_2}</p>
            </div>
            <div>
                <p className='text-2xl text-yellow-dark font-dg font-medium tracking-tight'>{Collab}</p>
            </div>
        </div>
    </div>
  )
}

export default Header
