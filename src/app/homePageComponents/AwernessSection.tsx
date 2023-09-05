import Image, { StaticImageData } from "next/image"
import Image1 from "../homeAssets/awerness1.jpeg";
import { useMediaQuery } from '@react-hook/media-query';
import Image2 from "../homeAssets/cleaning-11.jpeg"
import { Container } from "@/global/components/Container";
interface AwernessItem {
  title: string;
  image: StaticImageData;
  description:string;
}
export const AwernessSection = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const CONTENT=[
    {title:'نظافة بلدك تبلش من يمك',
    image:Image1,
    description:' ازمة النفايات بالعراق لها تأثير سلبي على المظهر العام للبلد اما على الفرد فتأثيرها على الجانب النفسي و الصحي و هذا يتطلب وقفة تغيرية تبدأ من الفرد و تنتهي من المجتمع'},
    {title:'خطوة خطوة ...سوا سوا',
    image:Image2,
    description:'مساهمتك في نظافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق مساهمتك في نضافة بلدك تبدا من بيتك ,الشارع ,منطقتك فمدينتك مساهمة بسيطة تصنع الفرق '},
  ]
  return (
    <section className="relative w-screen py-10 ">
    {!isTabletOrMobile? (<div className="absolute w-1/3 md:h-1/4  lg:h-1/3 lg:w-1/3 top-0  z-[-1] bottom-0 my-auto bg-transparent border-gray1-1 rounded-2xl border-8 border-gray4 border-opacity-30 left-0 right-0 mx-auto"></div>
     ):(<div></div>)} 
       <Container>
    <div className="flex flex-col gap-4">
     {CONTENT.map((item,index)=>(
       isTabletOrMobile?(<SectionRowMobile key={index} item={item} index={index}/>):
       (<SectionRow key={index} item={item} index={index}/>) 
       ))}
    </div>
    </Container>
    </section>
  )
}

const SectionRow=({item,index }:{item:AwernessItem,index:number})=>{
    const isOdd = index % 2 !== 0;
    return (
    <div style={{direction:"rtl"}} className={`flex ${isOdd ? "flex-row" : "flex-row-reverse"} gap-16 justify-between`}>
      <Image src={item.image} alt="campaign image" className="w-[45%] rounded-lg object-cover" />
       <div className={`flex flex-col  gap-4 h-full py-10 w-[50%] ${isOdd?'mt-auto mb-0 pb-0':'mb-auto mt-0 pb-0'}`}>
         <h2 className="text-xl font-bold md:text-xl lg:text-3xl text-gray2">{item.title}</h2>
         <p className="text-justify text-md md:text-sm lg:text-lg xl:text-xl text-gray2 ">{item.description}</p>
        </div>
    </div>
  );
}

const SectionRowMobile=({item,index }:{item:AwernessItem,index:number})=>{
    return ( 
    <div className="flex flex-col w-full ">
      <Image src={item.image} alt="campaign image" className="w-[90%] mx-auto rounded-md " />
       <div className=" flex flex-col gap-4  py-10 w-[80%] rounded-lg my-auto px-5 mx-auto text-center">
         <h2 className="text-xl font-bold text-gray2">{item.title}</h2>
         <p className="text-sm text-gray2">{item.description}</p>
        </div>
    </div>
  );
}
