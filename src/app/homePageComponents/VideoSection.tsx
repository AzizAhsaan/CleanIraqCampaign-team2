import Image from "next/image"
import { useMediaQuery } from '@react-hook/media-query';
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export const VideoSection = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const VIDEO_URL="https://www.youtube.com/watch?v=opWvTOVqay8"
  return (
    <section className="w-screen relative h-[36rem] ">
      {!isTabletOrMobile?(  <div className=" absolute rounded-xl  w-[50%]  right-[70%] top-[-100px] bottom-1/2 my-auto mx-auto object-fill border-8 border-gray4 border-opacity-30 z-[-1]"></div>):(<></>)}
      {!isTabletOrMobile?(  <div className=" absolute rounded-xl  w-[70%] left-1/2 right-0 top-4 bottom-4 my-auto mx-auto object-fill border-8 border-gray4 border-opacity-30"></div>):(<></>)}
        <div className=" absolute rounded-none md:rounded-xl overflow-hidden w-full md:w-1/2 left-0 right-0 top-0 bottom-0 my-auto mx-auto object-fill h-fit">
                <VideoPlayer videoUrl={VIDEO_URL}/>
              </div>
    </section>
  )
}
function VideoPlayer({ videoUrl }:{videoUrl:string}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
      <ReactPlayer
      controls={true}
      
        playing={false}
        url={videoUrl}
        width="100"
        height={400}
        crossOrigin="anonymous"
      />
  );
}