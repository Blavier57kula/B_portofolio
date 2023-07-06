import React from 'react'
import Image from 'next/image';
import Imgprofile from '../../public/assets/blvk.png';


const RightBanner = () => {
  return (
    
    <div className='w-1/2 flex  justify-center md:relative'>
          <Image src={Imgprofile} alt="profile" className='md:w-[500px] md:h-[450px]  md:absolute md:-top-10'/>  
    </div>

  )
}

export default RightBanner;