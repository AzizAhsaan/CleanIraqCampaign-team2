import Image from "next/image";
import blogImage from "../../homeAssets/plastic-water-bottle-ocean-1024x1024.jpg";

export default function BlogCard() { 
    return (
      <div className="mx-2 md:mx-4 my-6" style={{direction:"rtl"}}>
    <div className="flex w-full flex-col bg-white rounded-xl  bg-opacity-60 overflow-hidden shadow-lg shadow-slate-200">
        <div className="relative  h-24 md:h-32 w-full ">
           <Image src={blogImage} alt=""  className="w-full h-full object-cover"/>
        </div>
        <div className="flex flex-col gap-2  text-gray1 px-3 py-4">
          <h3 className="font-semibold  text-sm md:text-lg">اين تذهب نفايات الانهار</h3>
         <p className="text-xs text-gray3 text-justify ">منطقتك فمدينتك مساهمة بسيطة تصنع الفرق منطقتك فمدينتك مساهمة بسيطة تصنع الفرق </p>
        </div>
      </div>
</div>
)
    
}
