import React from 'react'
import { ModeToggle } from './theme-toggler'

const Navigation = () => {
  return (
    <div className='flex  justify-between items-center max-w-[1200px] m-auto px-10 py-4'>
      
          <div>
            <a href="">Mesfin Girma</a>
          </div>
          <ul className='flex gap-5'>
            <li>
              <a href="">Home</a>
           
            </li>
            <li><a href="">Projects</a></li>
             <li> <a href="">Work</a></li>
              <li><a href="">Testimonials</a></li>
          </ul>
          <ModeToggle/>
        </div>
   
  )
}

export default Navigation
