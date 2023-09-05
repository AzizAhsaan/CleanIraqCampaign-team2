'use client';
import { useMediaQuery } from '@react-hook/media-query';
import { faTelegram, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Logo } from '../Logo';
import { SocialLinks } from './SocialLinks';
import { FooterColumn } from './FooterColumn';
import NewsletterSection from './NewsLetterSection';
import { ROUTES } from '@/app/routes';
import MyModal from '../MyModal';
import { useState } from 'react';

export default function Footer() {
    const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
     const [showModal, setShowModal] = useState(false);

  function openModal() {
    console.log('opening modal');
    setShowModal(true);
  }

  function closeModal() {
    console.log('closing Modal');
    setShowModal(false);
  }


  const FOOTER_CONTENT={
    social:[
     { icon:faFacebook, link:"https://www.facebook.com/clean.iraq/",},
     { icon:faTelegram, link:"https://t.me/clean_iraq?fbclid=IwAR3qE2DG8_wtoTqdEWbS0zEQW0SsuQcj-MP-aiE7WchLaJHJSB6QUe5TLUA",},
     { icon:faInstagram, link:"https://www.instagram.com/reel/CmEH_cIKTBt/?igshid=MzRlODBiNWFlZA%3D%3D",},
    ],
    nav:[{
      title:"عن سفراء النظافة",
      links:[
        {text:"من نحن",link:ROUTES.about,onClick:undefined},
        {text:"الحملات",link:ROUTES.campaigns,onClick:undefined},
        {text:"المدونة",link:ROUTES.blog,onClick:undefined},

      ]},
  {
      title:"ساهم",
       links:[
        {text:"انضم للحملات",link:ROUTES.join,onClick:undefined},
        {text:"اقترح حملة",link:ROUTES.campaigns,onClick:undefined},
        {text:"تواصل معنا",link:ROUTES.contact,onClick:undefined},
        {text:"تبرع",link:"",onClick:openModal},
      ]
    }],
  }
  return (
 
  <footer className="w-screen px-5 py-10 bg-gray1 text-gray4" > 
  {showModal && <MyModal closeModal={closeModal}/>}
  {!isTabletOrMobile?( <div className="grid grid-cols-6 gap-4">
   <div className='col-span-2'>
    <NewsletterSection/>
    </div>
  {FOOTER_CONTENT.nav.map(item=>(
  <div key={item.title} className='col-span-1 text-end'>
   <FooterColumn item={item} />
  </div>
  ))}
  <div className="flex flex-col items-center col-span-2 gap-4">
      <Logo/>
      <SocialLinks content={FOOTER_CONTENT.social}/>
  </div>

</div>):(
<div>
      <SocialLinks content={FOOTER_CONTENT.social}/>
     <FooterDivider/>
  <div className="space-y-2 text-lg text-center ">
    <NewsletterSection/>
  </div>

<FooterDivider/>
  <div className='grid grid-cols-2 gap-2'>
      {FOOTER_CONTENT.nav.map(item=>(
  <div key={item.title} className='col-span-1 text-center'>
   <FooterColumn item={item} key={item.title}/>
  </div>
  ))}
  </div>
</div>)}
      </footer>
  )
}
 const FooterDivider = () => {
  return (
     <hr className='my-2 border border-gray2'/>
  )
}
