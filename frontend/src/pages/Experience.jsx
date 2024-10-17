import React from 'react'
import { TypeAnimation } from "react-type-animation"
import Card from '../components/card'
import VD from '../images/logo/vd.png'
const Experience = () => {
  return (
    <div className='w-lvw h-lvh absolute top-0 right-0 p-2'>
        <div className='p-2 mt-[85px] justify-center items-center'>
        <TypeAnimation
              sequence={["Project Experience", 1000, "", 1000]}
              wrapper="p"
              speed={1}
              className="text-2xl font-extrabold"
              repeat={Infinity}
            />
        </div>
        <div className='flex flex-col items-center mt-10 ml-5'><Card image={VD} altText="Logo" projTitle="VerdiQuest" content="Hello"/>  </div>
        
    </div>
  )
}

export default Experience