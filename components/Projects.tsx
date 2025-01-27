import { projects } from '@/lib/constants'
import React from 'react'

const Projects = () => {
  return (
    <div className='flex justify-center items-center flex-col py-32'>
      <h1> Projects</h1>
      <div>
        {
            projects.map((proj)=>(
                <div key={proj?.title}>
                    <p>{proj?.title}</p>
                    <p>{proj?.description}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Projects
