import React from 'react'

const PlansIntroduction = ({data}:any) => {
  return (
    <div className='bg-green-500 py-12'>
        <div className='mx-auto w-2/4 text-center'>
            <h2 className='text-3xl font-bold mb-10'>{data.title}</h2>
            <p className='text-2xl'>{data.content}</p>
        </div>
        

        
        </div>
  )
}

export default PlansIntroduction