'use client'
import { useMediaQuery } from '@react-hook/media-query';
import OutlinedButton from '../OutlinedButton';
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";


export default function NewsletterSection(){
  useEffect(() => emailjs.init("frq4SDLBb8qxSwQDm"), []);
  const emailRef = useRef<HTMLInputElement>(null); 
const nameRef = useRef<HTMLInputElement>();
const [loading, setLoading] = useState(false);


const handleSubmit = async () => {
  const serviceId = "service_lfihiga";
  const templateId = "template_d7l4vw9";
  try {
    setLoading(true);
    await emailjs.send(serviceId, templateId, {
      recipient: emailRef.current!.value 
    });
    alert("سوف يتم ارسال رسالة قبولك للايميل ");
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};



    const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
    const  NEWSLETTER_CONTENT={
      title:"ابق على اطلاع",
      subtitle:"اكتب بريدك الالتروني لتصلك اخبار الحملة",
      inputPlaceholder:'example@gmail.com',
      buttonText:"اشترك"
    }
  return (
    <>
    <div className={`space-y-2 ${isTabletOrMobile?'text-center':'text-end'}`}>
      <h5 className="font-semibold text-lg mb-3">{NEWSLETTER_CONTENT.title}</h5>
      <p className="text-xs text-gray3">{NEWSLETTER_CONTENT.subtitle}</p>
     <div className='flex gap-4 justify-center md:justify-end'>
       <OutlinedButton text={NEWSLETTER_CONTENT.buttonText} onClick={handleSubmit}/>
       <input
        className="bg-gray2 rounded-md px-2 text-start placeholder:text-sm"
        type="email"
        ref={emailRef}
        placeholder={NEWSLETTER_CONTENT.inputPlaceholder}
      />
     </div>
    </div>
   </> 
  );
};
