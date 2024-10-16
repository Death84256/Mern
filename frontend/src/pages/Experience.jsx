import React from 'react'
import { TypeAnimation } from "react-type-animation"

const Experience = () => {
  return (
    <div className='border-2 border-sky-500 w-lvw h-lvh absolute top-0 right-0 p-2'>
        <div className='border-2 p-2 mt-[85px]'>
        <TypeAnimation
              sequence={["Project Experience", 1000, "", 1000]}
              wrapper="p"
              speed={1}
              className="text-2xl font-extrabold"
              repeat={Infinity}
            />
        </div>
    </div>
  )
}

export default Experience