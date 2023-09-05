'use client'
import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import email from '../Assets/email.png';
import socialmediamarketing from "../Assets/socialmediamarketing.png"
import styles from "../Assets/css.module.css"
interface handleselectedid {
  handleselectedid: (id: number) => void;
}

const CampaignMessageGalleryPhotos: React.FC<handleselectedid> = ({ handleselectedid }) => {

  const [selectedId, setSelectedId] = useState<number | null>(1);

  const objects = [
    {
      id: 1,
      photo: email,
      title: 'رسالة الحملة',
    },
    {
      id: 2,
      photo: socialmediamarketing,
      title: 'خلال حملتنا',
    },
  ];

  const choosearticle = (id: number) => {
    setSelectedId(id);
    handleselectedid(id);
  };

  return (
    <section id='SectionCampaignMessageGallery' className='flex h-[9rem] flex-row '>
      {objects.map((object) => (
        <button
        
          onClick={() => choosearticle(object.id)}
          key={object.id}
          className={`flex flex-col items-center  lg:h-[8rem] lg:w-[9rem] 2sm:h-[5rem] 2sm:w-[6rem] lg:ml-[2rem] mr-[0.5rem] bg-white rounded-[1rem] ${
            selectedId === object.id ? `  ${styles.campaigngallery} lg:h-[9rem] lg:w-[10rem] 2sm:h-[6rem] 2sm:w-[7rem] text-white` : '' 
          }`}
        >
          <div className='lg:w-[4rem] lg:h-[4rem] 2sm:w-[3rem] 2sm:h-[3rem] rounded-[10rem]  bg-gray-200 overflow-hidden mt-[0.5rem]'>
            <Image
              src={object.photo}
              alt='رسالة الحملة'
              className='lg:h-[3rem] lg:w-[3rem] 2sm:w-[2rem]  2sm:h-[2rem] lg:ml-[0.5rem] lg:mt-[0.3rem] 2sm:ml-[0.5rem] 2sm:mt-[0.4rem]'
            />
          </div>
          <h1 className='text-dark lg:text-[1.2rem] 2sm:text-[0.8rem] font-bold lg:mt-[0.4rem] 2sm:mt-[0.02rem]'>
            {object.title}
          </h1>
        </button>
      ))}
    </section>
  );
};

export default CampaignMessageGalleryPhotos;
