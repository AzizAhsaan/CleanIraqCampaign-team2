import Image from "next/image"
import IClean from "../homeAssets/iclen.png";
import IPromise from "../homeAssets/ipromise.png";
import IInspire from "../homeAssets/iinspire.png";
import { useMediaQuery } from '@react-hook/media-query';
import { Container } from "@/global/components/Container";
import React, { useEffect, useState } from "react";
export const GoalsSection = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const VIDEO_URL="https://www.youtube.com/watch?v=opWvTOVqay8"
  const CONTENT=[
    {
    title:"نلهم",
    Icon:IInspire,
    paragraph:"الهدف من حملات التنظيف هو ايصال رسالة لكل شخص  يرمي النفايات في الشارع والانهار والتوعية بهذا الشان"
    },
    {
      title:"نتعهد",
      Icon:IPromise,
      paragraph:"نحن لا نهدف الى عمل حملات ولكن الى زرع عادات فينا ونتعهد بالاستمرار"
    },
    {
    title:"ننظف",
    Icon:IClean,
    paragraph:"نحاول دائما جعل ما حولنا نضيف نبدا من البيت وننتهي ببلد اجمل "
    },
  ]
  return (
    <section className="w-screen py-10 mb-4 md:py-20 bg-nutral md:mb-10">
        <Container>
        <div className="grid grid-cols-1 px-10 py-10 md:grid-cols-3 gap-y-10 place-items-center rounded-xl">
            {CONTENT.map((item)=>(
            <div key={item.title} className="flex flex-col gap-4 place-items-center">
               <Image src={item.Icon} alt="icon" className="w-20 h-20"/>
               <h2 className="text-3xl font-semibold text-secondary">{item.title}</h2>
               <p className="px-4 text-center text-gray1">{item.paragraph}</p>
            </div>
            ))}
            </div>
        </Container>
    </section>
  )
}


