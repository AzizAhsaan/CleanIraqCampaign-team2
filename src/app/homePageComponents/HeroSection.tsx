'use client'
import Image from "next/image"
import HeroImage from "../homeAssets/potentail-home2.jpeg";
import MainButton from "@/global/components/MainButton";
import { useMediaQuery } from '@react-hook/media-query';
import { ROUTES } from "@/app/routes";
import { Container } from "@/global/components/Container";
import Link from 'next/link';

export const HeroSection = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');

    const CONTENT = [
    { metric: "حملة تنضيف", number: "+50" },
    { metric: "كيس نفايات", number: "+75000" },
    { metric: "متطوع", number: "+10000" },
    { metric: "مدينة", number: "15" },
  ];
  const HERO_CONTENT={
  title:"مستعد تشارك بالحملة الجاية؟",
  subTitle:"سجل ويانة حتى تكدر تشارك  بالحملة القادمة ",
  buttonText:"انضم ويانة"
}
  return (
   <section className=" relative mb-40 md:mb-20 h-80 md:h-[40rem] bg-gradient-to-b from-black to-transparent text-white text-end mt-14 md:mt-20 w-[98%] md:w-[90%] mx-auto rounded-3xl bg-gray3 ">
    <Image src={HeroImage} alt="" className="  w-full h-full object-cover z-[-1] rounded-3xl "/>
    <div className=" absolute top-0  w-full h-full bg-black opacity-30 rounded-3xl"></div>
    <div className="absolute flex flex-col gap-2 items-end  px-4 md:px-40 top-0 bottom-0 my-auto h-fit right-0 text-end">
       <div className="border py-1 md:py-2 px-2 md:px-8rounded-md rounded-tl-3xl w-fit">
       <h1 className="text-sm md:text-4xl ">{HERO_CONTENT.title}</h1>
       </div>
       <p className="text-xs md:text-lg ">{HERO_CONTENT.subTitle}</p>
       <Link href={ROUTES.join}>
       <MainButton text={HERO_CONTENT.buttonText} />
       </Link>
    </div>
    <div className=" absolute bottom-[-150px] md:bottom-[-100px] left-0 right-0 mx-auto w-[90%] md:w-[70%]  h-48 bg-light bg-opacity-50 backdrop-filter backdrop-blur-md shadow-md rounded-3xl">
          <div className={`absolute grid ${isTabletOrMobile?'grid-cols-2':'grid-cols-4'} place-content-center gap-x-10 gap-y-6 md:gap-y-10 text-gray1 text-opacity-100  left-0 right-0 mx-auto items-center w-full h-full`}>
        {CONTENT.map((item, index) => (
          <div key={item.metric} className="flex flex-col gap-2 md:gap-8 items-center">
              <p className="text-lg md:text-3xl font-bold">{item.number}</p>
            <p className="text-sm md:text-2xl text-primary">{item.metric}</p>
          </div>
        ))}
      </div>

    </div>
    </section>
  )
}



 const test = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const HERO_CONTENT={
  title:"مستعد تشارك بالحملة الجاية؟",
  subTitle:"سجل ويانة حتى تكدر تشارك  بالحملة القادمة ",
  buttonText:"انضم ويانة"
}
  return (
    <section className=" relative  h-80 md:h-[40rem] bg-gradient-to-b from-black to-transparent text-white text-end mt-14 md:mt-20 w-[90%] mx-auto rounded-3xl bg-gray3 ">
    <Image src={HeroImage} priority={true} alt="" className="  w-full h-full object-cover z-[-1] rounded-3xl "/>
    <div className="absolute flex flex-col gap-2 items-end  px-4 md:px-40 top-0 bottom-0 my-auto h-fit right-0 text-end">
       <div className="border py-1 md:py-2 px-2 md:px-8rounded-md rounded-tl-3xl w-fit">
       <h1 className="text-sm md:text-3xl ">{HERO_CONTENT.title}</h1>
       </div>
       <p className="text-xs md:text-lg ">{HERO_CONTENT.subTitle}</p>
       <Link href={ROUTES.join}>
       <MainButton text={HERO_CONTENT.buttonText} />
       </Link>
    </div>
    <div className=" absolute bottom-[-50px] left-0 right-0 mx-auto w-56  h-32 bg-light backdrop-blur-lg rounded-lg"></div>
    </section>
  )
}