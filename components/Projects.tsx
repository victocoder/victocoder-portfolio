import { projects } from '@/lib/constants'
import React from 'react'

const Projects = () => {
  return (
    <div className='flex justify-center items-center flex-col py-32 max-w-[1200px] m-auto'>
      <h1> Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-center'>
        {
            projects.map((proj)=>(
                <div key={proj?.title} className='flex flex-col justify-center items-center px-4'>
                    <p>{proj?.title}</p>
                    <p className='text-center'>{proj?.description}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Projects
