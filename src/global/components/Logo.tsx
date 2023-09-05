import React from 'react'
import logo from '../../../public/logo.jpeg';
import Image from 'next/image';
import { useMediaQuery } from '@react-hook/media-query';
import { ROUTES } from '@/app/routes';
import Link from 'next/link';

export const Logo = () => {
    const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
    
  return (
  <Link href={ROUTES.home}>
    <Image
        priority={true}
        src={logo}
        alt="logo"
        className={`rounded-full cursor-pointer ${isTabletOrMobile ? 'w-10 h-10' : ' w-16 h-16'}`}
      />
  </Link>
   
  )
}

