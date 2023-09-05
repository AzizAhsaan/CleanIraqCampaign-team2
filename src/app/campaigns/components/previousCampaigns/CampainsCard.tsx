import Campaigns1 from "../../../../../public/placeholder-image.png";
import '../../assets/style.css';
import Image from 'next/image';
import IPreviousCampaigns from "./IPreviousCampaigns";
  import 'react-loading-skeleton/dist/skeleton.css'


export const CampaignCard = ({item}:{item:IPreviousCampaigns}) => {
  return (

 <div>
        <span className="date">{item.date}</span>
        <div className=" flex flex-col w-full">
        <div className="relative">
            <span className="absolute flex items-center justify-center text-lg right-4 bg-light top-4 rounded-md shadow-lg text-center px-2 m-0">{item.province}</span>
            <Image src={item.Photos?.[0]?.large?.url || Campaigns1 } alt="campaign image" className="rounded-lg w-full h-72 object-cover" width={item.Photos?.[0]?.large?.width} height={item.Photos?.[0]?.large?.height}/>
        </div>
        <div className="flex flex-col items-center gap-2  h-full py-6 w-full text-center">
            <h2 className="text-2xl text-gray2 font-bold">{item.location_describtion_ar}</h2>
            <div className="flex gap-10">
            <div className="flex flex-col items-center">
                <span className="text-secondary text-2xl font-semibold">{item.volenteers}</span>
                <span className="text-gray2">متطوع </span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-secondary text-2xl font-semibold">{item.trashBagsNumber}</span>
                <span className="text-gray2">كيس نفايات</span>
            </div>
         </div>
        </div>
    </div>
    <span className="circle"></span>
</div>
  )
}
