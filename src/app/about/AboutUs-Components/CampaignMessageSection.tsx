'use client'
import React, { useState } from 'react'
import CampaignMessageGalleryPhotos from './CampaignMessageGalleryPhotos'
import WhoWeAreSectionphoto3 from "../Assets/WhoWeAreSectionphoto3.jpg"
import Image ,{ StaticImageData } from 'next/image'
import WhoWeAreSectionphoto4 from "../Assets/WhoWeAreSectionphoto4.jpg"
import WhoWeAreSectionphoto33 from "../Assets/WhoWeAreSectionphoto33.jpg"
import WhoWeAreSectionphoto34 from "../Assets/WhoWeAreSectionphoto34.jpg"

import styles from "../Assets/css.module.css"
interface Object{
    id:number
    campaignmessage:string
    paragraph1:string
    campaigns:string
    campaignsnumber:string
    volunteers:string
    volunteersnumber:string
    nextstep:string
    paragraph2:string
    photo1:string | StaticImageData,
    photo2:string | StaticImageData,
}
const CampaignMessageSection = () => {
    const[selectedid,Setselectedid]=useState<number>(1)
    const handleselectedid=(id:number)=>{
        Setselectedid(id)
    }
    const[articles,setarticles]=useState<Object[]>([
        {
            id:1,
            campaignmessage:"رسالة الحملة",
            paragraph1:"كلنا نكدر نصنع تغيير ايجابي ولازم نتعاون ونسعى من اجل عراق انظف واجمل", 
            campaigns:"الحملات",
            campaignsnumber:"50+",
            volunteers:"المتطوعين",
            volunteersnumber:"10000+",
            nextstep:"الخطوة القادمة:",
            paragraph2:"فريقنا مستمر بتوسيع المشروع و تنظيم فعاليات تخلي يوم الحملة يكون فرحة واحتفال كبير بالنظافة والانجازات الي يحققوها #سفراء النظافة يوميا",
            photo1:WhoWeAreSectionphoto3,
            photo2:WhoWeAreSectionphoto4,


        },
        {
            id:2,
            campaignmessage:"شنو نستخدم خلال حملتنا؟",
            paragraph1:"الهدف من #سفراء_النظافة هو نشر الوعي وتغير ثقافتنا تجاه الاستهلاك والحفاظ على البيئة بدينا بشي جديد ونسوي تغيير بطريقة تنظيم التجمعات والمؤتمرات الي يصير بيها استهلاك كبير للبلاستك", 
            campaigns:"",
            campaignsnumber:"",
            volunteers:"",
            volunteersnumber:"",
            nextstep:"حملاتنا بدون بلاستك",
            paragraph2:" كل حملة نصرف اكثر من 2000 بطل بلاستك بس قررنا نغير ونستخدم مطارات مي!, و احنا نوفر رحلات مجانية علمود تسهل الطريق الكم ونتعاون بيناتنا اكثر ونحصل اكثر عدد ممكن من الناس علمود كلنا نشارك بهل حملات",
            photo1:WhoWeAreSectionphoto33,
            photo2:WhoWeAreSectionphoto34,
        },
    
    ])
    const selectedarticle=articles.find((article)=>article.id ===selectedid)


  return (
    <section id='campaignmessage' className='min-h-screen flex flex-col  items-center p-8 pl-9 pr-9 w-[98%] md:w-[90%]  mx-auto mt-5 rounded-3xl'>
        <CampaignMessageGalleryPhotos handleselectedid={handleselectedid} />
        {selectedarticle&&(
            <div className='flex w-full mt-[1rem] '>
            <article id='SectionContentCampiagnMessage' className='flex flex-col lg:w-6/12 md:w-3/5 2sm:w-3/5 	 justify-end text-right items-end '>
            <div className='lg:w-[6rem] lg:h-[3rem] 2sm:w-[4rem] 2sm:h-[2rem] text-secondary rounded-[30px]'><h1 className='text-white text-center mt-[0.6rem] 2sm:text-[0.6rem] xl:text-[1.2rem] lg:text-[1.1rem] md:text-[0.8rem]'>معلومات </h1></div>
    
                <div className='items-center'>
                    <h1 className='lg:text-[2.2rem] md:text-[1.5rem] 2sm:text-[1.0rem] mt-[1rem] text-secondary font-bold'>{selectedarticle.campaignmessage}</h1>
                    <p className='mt-[1rem] lg:text-[1rem] md:text-[0.7rem] 2sm:text-[0.5rem] text-gray1'>{selectedarticle.paragraph1}</p>
                    <div className='flex justify-center items-center text-center mt-[2rem] '>
                        <div className='flex flex-col items-center justify-center text-center mr-[3rem]'>
                            <h1 className='lg:text-[1rem] md:text-[0.8rem] 2sm:text-[0.5rem] font-bold '>{selectedarticle.campaigns}</h1>
                            <h1 className='text-secondary font-bold lg:text-[1.4rem] md:text-[1rem] 2sm:text-[0.6rem] mt-[1rem]'>{selectedarticle.campaignsnumber}</h1>
                        </div>
                        <div className='flex flex-col items-center  bg '>
                            <h1 className='lg:text-[1rem] md:text-[0.8rem] 2sm:text-[0.5rem] font-bold '>{selectedarticle.volunteers}</h1>
                            <h1 className='text-secondary font-bold xl:text-[1.4rem] lg:text-[1.4rem] md:text-[1rem] 2sm:text-[0.6rem] mt-[1rem]'>{selectedarticle.volunteersnumber}</h1>
                        </div>
                    </div>
                    <h1 className='lg:text-[1.7rem] md:text-[1.6rem] 2sm:text-[1.0rem] mt-[1rem] text-black font-bold'>{selectedarticle.nextstep}</h1>
                    <p className='mt-[1rem] lg:text-[1rem] md:text-[0.7rem] 2sm:text-[0.5rem] text-gray1'>{selectedarticle.paragraph2}</p>
                    <div className='flex flex-col justify-center items-center text-center '>
                    
                    </div>
                </div>
            </article>
            <div id='SectionPhotoCampiagnMessage' className='lg:w-6/12 md:w-2/5 2sm:w-2/5 flex  justify-first xl:ml-[6rem]  lg:mr-[1.5rem] items-start md:ml-[4rem]    '>
                <div className='lg:w-[23rem] lg:h-[32rem] md:w-[15rem] md:mr-[5rem]   relative flex justify-center items-center'>
                    <Image  src={selectedarticle.photo1} alt="picture" className={`lg:h-full lg:w-full md:w-10/12 md:h-10/12 2sm:w-10/12 2sm:h-10/12 object-cover  ${styles.tv}`} />
                    <Image src={selectedarticle.photo2} alt='picture2' className='absolute lg:w-11/12 lg:h-11/12 md:w-10/12 md:h-10/12 2sm:w-10/12 2sm:h-10/12 lg:border-[0.5rem] 2sm:border-[0.1rem] lg:top-[15.9rem] lg:left-[10.2rem]  md:left-[6rem] md:top-[7.4rem] 2sm:left-[2rem] 2sm:top-[3.4rem] object-cover  ' />
                </div>
            </div>
          </div>
        )}
      
    </section>
  )
}

export default CampaignMessageSection
