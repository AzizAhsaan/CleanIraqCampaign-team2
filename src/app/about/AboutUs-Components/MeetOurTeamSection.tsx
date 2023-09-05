'use client'
import React, { useEffect, useState } from 'react'
import personalphoto from '../Assets/personalphoto.jpg'
import Image, { StaticImageData } from 'next/image'
import HeroSectionphoto1 from '../Assets/HeroSectionphoto1.jpg'
import HeroSectionphoto2 from '../Assets/HeroSectionphoto2.jpg'
import HeroSectionphoto3 from '../Assets/HeroSectionphoto3.jpg'
import HeroSectionphoto4 from '../Assets/HeroSectionphoto4.jpg'
import WhoWeAreSectionphoto1 from "../Assets/WhoWeAreSectionphoto1.jpg"
import WhoWeAreSectionphoto2 from "../Assets/WhoWeAreSectionphoto2.jpg"
import {BiLogoFacebook,BiLogoInstagram,BiLogoTwitter} from 'react-icons/bi'
import styles from "../Assets/css.module.css"
import supervisor122 from "../Assets/supervisor122.jpg"
import supervisor1221 from "../Assets/supervisor1221.jpg"
import supervisor11 from "../Assets/supervisor11.jpg"
import supervisor4 from "../Assets/supervisor4.jpg"
import murtadah from "../Assets/murtadah.jpg"
const MeetOurTeamSection = () => {
  
    type Object = {
        [key: string]: any;
        id?: number;
        photo?:string | StaticImageData;
        name?: string;
        bio?: string;

      };
    const object: Object=[
        {
            id:1,
            photo:murtadah,
            name:"مرتضى",
            facebook:"https://www.facebook.com/AzizAhsaan2/",
            job:"front-end develper",

            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        {
            id:2,
            photo:supervisor1221,
            name:'حسن',
            facebook:"https://www.facebook.com/AzizAhsaan2/",
            job:"front-end devewqelper",

            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        {
            id:3,
            photo:supervisor11,
            name:"سيف",
            facebook:"https://www.facebook.com/AzizAhsaan2/",
            job:"front-end develper",

            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        {
            id:4,
            photo:supervisor4,
            name:"محمد",
            facebook:"https://www.facebook.com/AzizAhsaan2/",
            job:"front-end develper",

            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
    ]
    const[selectedphoto,Setselectphoto]=useState(false)
    const [newperson, setNewPerson] = useState<Object>({
        id:0,
        name: "مرتضى",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  job:"front-end develper",

  facebook:"https://www.facebook.com/AzizAhsaan2/",
  photo: murtadah,
    })
    const changehtml=(photoid:number)=>{
        object.map((person: Object)=>{
            if(person.id===photoid){
                setNewPerson(person)
                Setselectphoto(true)
            }
        })
    }
  return (
    <section id='OurTeam' className='min-h-screen flex flex-col w-[98%] md:w-[90%]  mx-auto mt-5 rounded-3xl  items-center p-8 pl-9 pr-9 '>
      <h1 id='MeetOurTeamText' className='xl:text-[4rem] lg:text-[3.5rem] md:text-[3rem] 2sm:text-[2.0rem] 2sm:mt-[4rem] xl:mr-[4rem] text-secondary font-bold'>التقي بفريقنا</h1>
      <div className=' xl:block lg:block md:block 2sm:hidden xl:w-[29rem] xl:mr-[3rem] lg:w-[28rem] md:w-[25rem] 2sm:w-[13rem]  h-[0.10rem] bg-secondary mt-[2rem]'></div>
      <div className='flex items-center justify-center w-full h-3/4 xl:flex-row lg:flex-row md:flex-row 2sm:flex-col '>
        <div id='SectionPhotoMeetOurTeam' className='flex items-end justify-end w-2/4 '>
          <div className='flex justify-center items-center xl:w-[20rem] xl:h-[20rem] lg:w-[20rem] lg:h-[20rem] md:w-[15rem] md:h-[15rem] 2sm:w-[8rem] 2sm:h-[8rem]  lg:ml-[10rem] md:ml-[6rem] 2sm:mt-[1.2rem]   '>
          {newperson.photo ? (
                  <Image src={newperson.photo} alt='photo' className={`w-full h-full xl:rounded-[0rem] lg:rounded-[0rem] md:rounded-[0rem] 2sm:rounded-[10rem]  object-cover ${styles.bordermeetourteam} `} />
                ) : (
                  <span>No photo available</span>
                )}
          </div>
        </div>
        <div className=' xl:block lg:block md:block 2sm:hidden   xl:h-[30rem] lg:h-[25rem] md:h-[25rem] 2sm:h-[15rem] border-l-[0.2rem] bg xl:ml-[10rem] lg:ml-[6rem] md:ml-[3rem]    border-secondary mt-[2rem]'></div>
        <div id='SectionContentMeetOurTeam' className='w-2/4 xl:ml-[10rem] lg:ml-[1rem] lg:mr-[9rem] md:mr-[1rem] 2sm:mr-[11rem] 2sm:mt-[2rem]	 h-full  flex justify-start items-start  '>
          <div className='flex flex-col items-center justify-start'>
            <h1 className='xl:text-[4rem] lg:text-[4rem] md:text-[3rem] 2sm:text-[2rem]'>{newperson.name}</h1>
            <div className='w-[10rem]  border-[0.1rem]  border-secondary mt-[0.6rem] mb-[0.5rem]'></div>
            <h1 className='xl:text-[2rem] lg:text-[2rem] md:text-[1.5rem] 2sm:text-[1rem]'> {newperson.job}</h1>
            <div className='flex w-[20rem] mt-[1rem] h-[4rem] justify-center items-center '>
              <div className='xl:w-[3rem] xl:h-[3rem] lg:w-[3rem] lg:h-[3rem] md:w-[2.5rem] md:h-[2.5rem] 2sm:h-[2rem] 2sm:w-[2rem] rounded-[5rem] bg-slate-100 hover:bg-[#a6ffdd78] flex justify-center items-center border-[0.1rem] border-black'>
                <a href='https://www.facebook.com/AzizAhsaan2/'>< BiLogoFacebook className=" text-black    rounded-[9rem]  xl:w-[1.9rem] xl:h-[1.9rem] lg:w-[1.9rem] lg:h-[1.9rem] md:w-[1.9rem] md:h-[1.5rem] 2sm:w-[1.5rem] 2sm:h-[1.2rem]" /></a>
              </div>
              <div className='xl:w-[3rem] xl:h-[3rem] lg:w-[3rem] lg:h-[3rem] md:w-[2.5rem] md:h-[2.5rem] ml-[2rem] 2sm:h-[2rem] 2sm:w-[2rem] rounded-[5rem] bg-slate-100 hover:bg-[#a6ffdd78] flex justify-center items-center border-[0.1rem] border-black'>
                <a href='https://www.facebook.com/AzizAhsaan2/'>< BiLogoInstagram className=" text-black    rounded-[9rem]  xl:w-[1.9rem] xl:h-[1.9rem] lg:w-[1.9rem] lg:h-[1.9rem] md:w-[1.9rem] md:h-[1.5rem] 2sm:w-[1.5rem] 2sm:h-[1.2rem]" /></a>
              </div>
              <div className='xl:w-[3rem] xl:h-[3rem] lg:w-[3rem] lg:h-[3rem] md:w-[2.5rem] md:h-[2.5rem] ml-[2rem] 2sm:h-[2rem] 2sm:w-[2rem] rounded-[5rem] bg-slate-100 hover:bg-[#a6ffdd78] flex justify-center items-center border-[0.1rem] border-black'>
                <a href='https://www.facebook.com/AzizAhsaan2/'>< BiLogoTwitter className=" text-black    rounded-[9rem]  xl:w-[1.9rem] xl:h-[1.9rem] lg:w-[1.9rem] lg:h-[1.9rem] md:w-[1.9rem] md:h-[1.5rem] 2sm:w-[1.5rem] 2sm:h-[1.2rem]" /></a>
              </div>
            </div>
            <h1 className='xl:text-[0.9rem] lg:text-[0.9rem] md:text-[0.7rem] 2sm:text-[0.6rem] mt-[1rem] text-center xl:w-[25rem] xl:h-[10rem] lg:w-[25rem] lg:h-[10rem] md:w-[22rem] md:h-[8rem] 2sm:h-[8rem] 2sm:w-[10rem] text-black'>{newperson.bio}</h1>
            
          </div>
        </div>




      </div>
      <div id='SectionTeamMembersMeetOurTeam' className='xl:flex lg:flex md:flex 2sm:grid 2sm:grid-cols-2 2sm:grid-rows-2 xl:gap-[0rem] lg:gap-[0rem] md:gap-[0rem] 2sm:gap-[3rem] mt-[3rem]'>
            {object.map((person: Object)=>(
                 <div key={person.id} className={`xl:w-[13rem] xl:h-[17rem] lg:w-[10.5rem] lg:h-[15rem] md:w-[7.8rem] 2sm:w-[4rem] flex flex-col justify-center  items-center `}>
                 <div className={` xl:h-[9rem] xl:w-[9rem] lg:h-[9rem] lg:w-[9rem] md:h-[6rem] md:w-[6rem] 2sm:h-[5rem] 2sm:w-[5rem] rounded-[13rem] `}>
                 {person.photo ? (
                  <Image src={person.photo} alt='photo' className='w-full h-full rounded-[15rem]' />
                ) : (
                  <span>No photo available</span>
                )}
                 </div>
                 <div className={`bg-secondary text-light font-bold px-2  my-auto py-1 rounded-md xl:w-[7rem] xl:h-[2.0rem] lg:w-[7rem] lg:h-[2.0rem] md:w-[7rem] md:h-[2.0rem] 2sm:w-[4rem] 2sm:h-[2.0rem]  flex justify-center mt-[1rem] ${newperson.id===person.id?'xl:w-[8rem] xl:h-[2.5rem] ease-in duration-300':''}` } ><button onClick={() => person.id !==undefined && changehtml(person.id)}  className='font-extrabold text-white'>{person.name}</button></div>
             </div>
             
            ))}
                  </div>
            
    </section>
  )
}

export default MeetOurTeamSection
