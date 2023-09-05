import React from 'react'
import styles from "../BlogAssets/css.module.css"
const HeroSectionBlogPage = () => {
  return (
    <section id='Home' className={`h-screen flex flex-col justify-center items-center relative bg-[#faf4f2]   w-[98%] md:w-[90%] mx-auto mt-20 rounded-3xl ${styles.curved}`} >
        <h1 className='text-[4rem] text-white'>مدونة سفراء النظافة</h1>
        <p className='text-[0.9rem] text-white mt-[1rem]'>اتعرف على اخر احداث الحملة و قصص نجاحها  وحتواها التعليمي</p>
    </section>
  )
}

export default HeroSectionBlogPage
