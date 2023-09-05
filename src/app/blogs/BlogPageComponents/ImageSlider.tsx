'use client';
import React, { useState } from 'react';
import Image ,{ StaticImageData }  from 'next/image';

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import styles from '../BlogAssets/css.module.css';
interface Article{
    id:number
    src:string | StaticImageData,
    alt:string

}
interface ImageSliderProps {
    educationcontent: Article[];
  }
const ImageSlider: React.FC<ImageSliderProps>= ({educationcontent}) => {
  

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === educationcontent.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? educationcontent.length - 1 : slide - 1);
  };

  return (
    <div className={styles.carousel}>
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className={`${styles.arrow} ${styles.arrowleft}`} 
      />
      {educationcontent.map((item, idx) => (
        <img
        src={typeof item.src === 'string' ? item.src : item.src.src}
          alt={item.alt}
          key={idx}
          className={`${styles.slide} ${
            slide === idx ? '' : styles.slidehidden
          }`} 
        />
      ))}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className={`${styles.arrow} ${styles.arrowright}`} 
      />
      <span className={styles.indicators}>
        {educationcontent.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.indicator} ${
              slide === idx ? styles.indicatorinactive : ''
            }`} 
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};
export default ImageSlider;