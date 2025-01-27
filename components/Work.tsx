import { workExperience } from '@/lib/constants'
import { CheckCheck } from 'lucide-react'
import React from 'react'

const Work = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-4xl'>Experience</h1>

      <div>
        {
            workExperience.map((work,index)=>(
                <div key={index}>
                    <h1> {work.company}</h1>
                    <p>{work.type}</p>
                    <p>{work.year}</p>
                    <p>{work.role}</p>
                    <p>{work.descreption}</p>
                    {
                    work.responsibility.map((resp)=>(
                        <div key={resp}>
                            <p><CheckCheck /> {resp}</p>
                        </div>
                    ))
                    }
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Work
