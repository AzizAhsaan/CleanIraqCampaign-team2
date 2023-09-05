'use client'
import React,{useState,useEffect} from 'react'
import { Link as ScrollLink } from 'react-scroll';

import Image from 'next/image'
import home from "../Assets/home.png"
import request from "../Assets/request.png"
import emailmarketing from "../Assets/emailmarketing.png"
import user from "../Assets/user.png"
import conversation from "../Assets/conversation.png"
import Link from 'next/link'
import socialweb from "../Assets/socialweb.png"
const NavigationAboutUs = () => {
  const navigationbar=[
    {
      id:1,
      image:home,
      title:"نبذة عنا",
      to:"#Home"
      
    },
    {
      id:2,
      image:request,
      title:"من نحن",
      to:"#whoweare"
      
    },
    {
      id:3,
      image:emailmarketing,
      title:"رسالة الحملة",
      to:"#campaignmessage"
      
    },
    {
      id:4,
      image:conversation,
      title:"التقي بفريقنا",
      to:"#OurTeam"
    },
    {
      id:5,
      image:socialweb,
      title:"اعلام",
      to:"#MediaBlog"
    }
  ]
  const [selectedId, setSelectedId] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + 250;

      let activeSectionId = -1;

      navigationbar.forEach((nav) => {
        const section = document.querySelector(nav.to);
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (sectionTop <= currentPosition && currentPosition < sectionBottom) {
            activeSectionId = nav.id;
          }
        }
      });

      setSelectedId(activeSectionId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-full bottom-0 fixed mb-[1rem] z-50 flex justify-center items-center'>
      <div className='2xl:w-[26rem] 2xl:h-[3rem] xl:w-[26rem] xl:h-[3rem] lg:w-[26rem] lg:h-[3rem] md:w-[15rem] md:h-[2.1rem] 2sm:w-[15rem] 2sm:h-[2.1rem] rounded-[2rem] flex justify-center items-center bg-secondary overflow-hidden border-[0.15rem] border-white '>
        {navigationbar.map((navigation) => (
          <div
            key={navigation.id}
            className={`2xl:w-[6rem] xl:w-[6rem] lg:w-[6rem] md:w-[4rem] 2sm:w-[4rem]  h-full flex flex-col justify-center items-center ease-in-out duration-300 ${
              navigation.id === selectedId ? 'bg-white' : ''
            } `}
          >
            <ScrollLink
              to={navigation.to.slice(1)}
              spy={true}
              smooth={true}
              offset={10}
              duration={10}
              onClick={() => setSelectedId(navigation.id)}
              className={`w-full h-full 2xl:text-[0.85rem] xl:text-[0.85rem] lg:text-[0.85rem] md:text-[0rem] 2sm:text-[0rem]  text-center mb-[0.45rem] mr-[0.2rem]  ${navigation.id === selectedId ? 'text-black' : 'text-white'}`}
            >
              <Image
                src={navigation.image}
                alt='icon1'
                className='w-[1.4rem] h-[1.4rem] 2xl:ml-[1.8rem] xl:ml-[1.8rem] lg:ml-[1.8rem] md:ml-[1rem] 2sm:ml-[1rem] mt-[0.3rem] '
              />
              {navigation.title}
            </ScrollLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationAboutUs;