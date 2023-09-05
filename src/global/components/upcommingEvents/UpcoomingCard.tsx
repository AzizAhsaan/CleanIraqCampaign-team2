import Image from "next/image";
import HeroImage from "@/app/homeAssets/potentail-home2.jpeg";
import { faClock,faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faMapPin} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ROUTES } from "@/app/routes";
import Link from "next/link";

export default function UpcommingCard({isEven}:{isEven:boolean}) {
  const latitude = 37.7749;
  const longitude = -122.4194;
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    return (
      <div className="mx-2 md:mx-4 my-6">
    <div className="flex w-full flex-col bg-white rounded-xl  bg-opacity-60 overflow-hidden shadow-lg shadow-slate-200">
        <div className="flex flex-col py-1 text-center text-md md:text-2xl font-bold text-gray4 bg-nutral">
          <p>7 july</p>
          <p>2023</p>
        </div>
        <div className="relative  h-24 md:h-32 w-full ">
           <Image src={HeroImage} alt=""  className="w-full h-full object-cover"/>
           <div className="absolute flex justify-end items-end w-full h-full bottom-0 right-0 bg-opacity-30  bg-black">
            <span className="flex items-center text-light font-medium  opacity-100 px-4 py-2 gap-2 "><h6>الديوانية</h6> <FontAwesomeIcon icon={faBuilding}/></span>
           </div>
        </div>
        <div className="flex flex-col gap-1 items-end text-gray1 px-6 py-2">
          <h3 className="font-semibold text-sm md:text-xl">جسر ابو نؤاس </h3>
          <div className="flex gap-2 items-center text-sm"> <span> 5:00 pm</span><FontAwesomeIcon icon={faClock} className="text-secondary"/></div>
          <div className="flex gap-2 items-center"> <Link href={mapUrl} key={mapUrl} className="underline">الموقع</Link><FontAwesomeIcon icon={faMapPin} className="text-secondary"/></div>
          <Link href={ROUTES.join}>
          <button className="bg-transparent border  border-secondary rounded-md text-secondary font-normal px-2  text-md my-2"
          >انضم للحملة</button>
          </Link>
        </div>
      </div>
</div>
)
    
}
