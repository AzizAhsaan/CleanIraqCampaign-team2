import Image from "next/image"
import HeroImage from "../assets/campigns_hero.jpeg";
import { useMediaQuery } from '@react-hook/media-query';
import { SuggustCampaignForm } from "./SuggustCampaignForm";

export const CampaignsHero = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const HERO_CONTENT={
  title:"وين تريد الحملة القادمة؟",
  subTitle:"اقترح مكان تشوفة يحتاج حملة"
}

  return (
    <section className=" relative  h-[40rem] md:h-[36rem] bg-black text-light text-end w-[98%] mx-auto md:w-[90%] rounded-3xl overflow-hidden mt-20">
    <Image src={HeroImage} priority={true} alt="" className=" absolute  w-full h-full object-cover opacity-40 "/>
    <div className="absolute my-20 md:my-32 top-0 w-full">
            <div className="flex  flex-col-reverse gap-8  items-top md:flex-row justify-between px-4 md:px-20">
                <SuggustCampaignForm/>
                <div className="flex flex-col gap-2 items-center md:items-end  px-4   text-center md:text-end">
                    <h1 className="text-2xl md:text-2xl lg:text-4xl">{HERO_CONTENT.title}</h1>
                    <p className="text-xs md:text-xl font-normal ">{HERO_CONTENT.subTitle}</p>
                </div>
            </div>
  </div>
    </section>
  )
}