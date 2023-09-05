import React from 'react'
import Image from 'next/image';
import HeroSectionphoto1 from "../Assets/HeroSectionphoto1.jpg"
import HeroSectionphoto2 from "../Assets/HeroSectionphoto2.jpg"
import HeroSectionphoto3 from "../Assets/HeroSectionphoto3.jpg"
import HeroSectionphoto4 from "../Assets/HeroSectionphoto4.jpg"
import styles from "../Assets/css.module.css"
import bannerphoto from "../Assets/bannerphoto.jpg"
import recycling from "../Assets/recycling.png"
const HeroSection = () => {
  return (
    <div id='Home' className={`relative mb-40 md:mb-20 2xl:h-[31rem] xl:h-[31rem] md:h-[25rem] 2sm:h-[22rem] 2sm:ml-[0.2rem] 2xl:ml-[4rem] xl:ml-[4rem] lg:ml-[2rem] md:ml-[1.5rem] 2sm:mr-[0.7rem] bg-gradient-to-b from-black to-transparent text-white text-end mt-14 md:mt-20 w-[98%] md:w-[90%] mx-auto rounded-3xl bg-gray3`}  >
    <div className='mb-[10rem] flex flex-col items-center justify-center gap-10 '>
    <video autoPlay loop muted playsInline  className="w-full h-full object-cover z-[3] rounded-3xl absolute right-0 bottom-0 opacity-40   ">
      <source src="/videos/cleaniraqvideo2.mp4" />
       </video>
    </div>
    <h1 className='2xl:text-[5rem] xl:text-[5rem] lg:text-[5rem] md:text-[5rem] 2sm:text-[3rem]  text-center text-white opacity-100 '>منو سفراء النظافة؟ </h1>

    </div>

  )
}

export default HeroSection
