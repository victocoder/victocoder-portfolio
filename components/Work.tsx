import { workExperience } from '@/lib/constants'
import { CheckCheck } from 'lucide-react'
import React from 'react'

const Work = () => {
  return (
    <div className='flex flex-col tems-center max-w-[1200px] m-auto'>
      <h1 className='text-4xl text-center'>Experience</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
        {
            workExperience.map((work,index)=>(
                <div key={index} className='flex justify-start  flex-col  border border-blue-400  px-4 py-6 rounded-md'>
                    <h1> {work.company}</h1>
                    <p>{work.type}</p>
                    <p>{work.year}</p>
                    <p>{work.role}</p>
                    <p>{work.descreption}</p>
                    {
                    work.responsibility.map((resp)=>(
                        <div key={resp} className='flex justify-start items-start flex-col'>
                            <div className='flex justify-start items-center gap-4'><CheckCheck /> {resp}</div>
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
