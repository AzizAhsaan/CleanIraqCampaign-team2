'use client'
import React, {useEffect} from 'react'

import Image from 'next/image';
import WhoWeAreSectionphoto1 from "../Assets/WhoWeAreSectionphoto1.jpg"
import WhoWeAreSectionphoto2 from "../Assets/WhoWeAreSectionphoto2.jpg"
import WhoWeAreSectionphoto3 from "../Assets/WhoWeAreSectionphoto3.jpg"
import WhoWeAreSectionphoto4 from "../Assets/WhoWeAreSectionphoto4.jpg"
import litter from "../Assets/litter.png"
import nolitteringsign from "../Assets/nolitteringsign.png"
import plastic from "../Assets/plastic.png"
import styles from "../Assets/css.module.css"

const WhoWeAreSection:React.FC = () => {
  return (
    <section id='whoweare' className='min-h-screen  flex flex-col items-center w-[98%] md:w-[90%]  mx-auto mt-1 rounded-3xl  p-8 pl-9 pr-9 bg-[#fffdfa] '>

      <div className='flex  lg:flex-row md:flex-col 2sm:flex-col justify-center items-center h-full    '>

        <div id='FirstSectionWhoWeAre' className='flex lg:w-2/5 bg-transparent border-[0.2rem] border-gray-500  w-[20rem] h-[20rem] md:w-[17rem] md:h-[17rem] 2sm:w-[10rem] 2sm:h-[10rem] mr-[5rem] lg:ml-[4rem] relative 2sm:ml-[4rem]' >
           <Image src={WhoWeAreSectionphoto1} alt='photo' className='absolute w-[9rem] h-[12rem] md:w-[7rem] md:h-[10rem] 2sm:w-[5rem] 2sm:h-[5rem]  top-[2rem] right-[77%] object-cover' />
           <Image src={WhoWeAreSectionphoto4} alt='photo' className='absolute w-[10.5rem] h-[7rem] md:w-[8rem] md:h-[6rem] 2sm:w-[6rem] 2sm:h-[4rem] top-[-14%] left-[70%] object-cover' />
           <Image src={WhoWeAreSectionphoto3} alt='photo' className={`absolute w-[12rem] h-[16rem] md:w-[9rem] md:h-[13rem] 2sm:w-[5rem] 2sm:h-[7rem] bottom-[-14%] left-[60%] object-cover ${styles.tv1}`} />


        </div>
        <article id='SecondSectionWhoWeAre'  className='flex flex-col  text-right lg:w-3/5	 overflow-hidden ml-[2rem] lg:ml-[10rem] md:mt-[5rem] 2sm:mt-[5rem]'>
            <h1 className='lg:text-[2.0rem] md:text-[2.2rem] sm:text-[1.8rem] md:text-center sm:text-center   font-bold text-secondary 2sm:text-center 2sm:text-[1.2rem]'>منو سفراء النظافة</h1>
            <h2 className='lg:text-[1.5rem] mt-[2rem] font-bold 2sm:text-[1.2rem]'>مهمتنا</h2>
            <p className='mt-[1rem] 2sm:text-[0.6rem] lg:text-[1rem] text-gray1'>هذي الحملة منكم واليكم. اني وانت واحنا كلنا سفراء النظافة اذا نحرص على نظافة هذا البلد ونتعهد</p>
            <div className='flex mt-[2rem] justify-center '>
                <div className='flex flex-col xl:mr-[5rem] lg:mr-[5rem] md:mr-[2rem] 2sm:mr-[2rem] '>
                    <Image src={nolitteringsign} alt='nolitteringsign' className='lg:h-[5rem] lg:w-[5rem] 2sm:h-[3rem] 2sm:w-[3rem] text-center' />
                    <h1 className='text-secondary text-center lg:text-[0.8rem] 2sm:text-[0.5rem] font-bold '>نساهم بتنظيف  <br /> الاماكن العامه</h1>
                </div>
                <div className='flex flex-col mr-[1rem] 2sm:mr-[2rem] '>
                    <Image src={litter} alt='litter' className='lg:h-[5rem] lg:w-[5rem] 2sm:h-[3rem] 2sm:w-[3rem]  ' />
                    <h1 className='text-secondary text-center lg:text-[0.8rem]  2sm:text-[0.5rem] font-bold'>ما اشمر النفايات ابدا</h1>
                </div>
                <div className='flex flex-col '>
                    <Image src={plastic} alt='plastic' className='lg:h-[5rem] lg:w-[5rem] 2sm:h-[3rem] 2sm:w-[3rem]' />
                    <h1 className='text-secondary w-full text-center lg:text-[0.8rem] 2sm:text-[0.5rem] font-bold'>توعية الناس <br /> الي يذبون الزبالة</h1>
                </div>
            </div>
            <h1 className='mt-[2rem] lg:text-[1.1rem]  2sm:text-[0.7rem] text-gray1'>بدت الفكرة وية صديقنا مرتضى التميمي من قرر يطلع ينظف نهر <br /> دجلة حتى يكدر يستمتع بمنظر الغروب من ضفاف النهر</h1>
            <h1 className='mt-[1.5rem] lg:text-[1.1rem]  2sm:text-[0.7rem] text-gray1'>وبعد دعم فريق المحاربين وحملة تشجير تطورت المبادرة و انطلقت حملة #سفراء_النظافة</h1>
            <h1 className='font-bold mt-[1.2rem] lg:text-[2rem] text-black 2sm:text-[1.3rem] '>وخلال فترة قصيرة</h1>
            <h1 className='mt-[2rem] lg:text-[1.1rem]  2sm:text-[0.7rem] text-gray1'>وصلت الحملة لاغلب محافظات العراق وشارك بيها مئات الاشخاص من كلا الجنسين وجميع الفئات العمرية</h1>

        </article>
      </div>
    </section>
  )
}

export default WhoWeAreSection
