'use client'
import React from 'react';

export const SectionTitle = ({text,isPrimaryColor}:{text:string,isPrimaryColor?:boolean}) => {
  return (
   <h2 className={`py-3 font-semibold text-lg md:text-2xl ${isPrimaryColor ? 'text-secondary' : ' text-gray1'}`}>
    {text}
   </h2>
  )
}

