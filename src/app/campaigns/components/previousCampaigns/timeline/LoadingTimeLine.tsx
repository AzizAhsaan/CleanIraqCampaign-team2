import React from 'react'
import '../../../assets/style.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export const LoadingTimeLine = () => {
    const list=[{},{},{},{}]
  return ( <div className="main">
            <div className="container w-[10%]">
                <ul>
             { list.map((item,index)=>(<li key={index}>
                       <LoadingCard/>
             </li>))}
                </ul>
            </div>
        </div>
  )
}

 const LoadingCard = () => {
  return (

<div className='w-[100%] mx-auto h-fit '>
     <SkeletonTheme  baseColor="#dddddd" highlightColor="#f8f8f8">
        <span className="date"></span>
        <div className=" flex flex-col w-full h-fit pb-10">
        <div className="flex flex-col gap-5 ">
            <div className="rounded-lg w-[100%] "><Skeleton height={300}borderRadius={10}/></div>
             <div className="rounded-lg w-full object-cover px-20"><Skeleton height={20}borderRadius={5}/></div>
            <div className="rounded-lg w-full object-cover px-20"><Skeleton height={20}borderRadius={5}/></div>
        </div>
    </div>
    <span className="circle"></span>
</SkeletonTheme>
</div>
  )
}
