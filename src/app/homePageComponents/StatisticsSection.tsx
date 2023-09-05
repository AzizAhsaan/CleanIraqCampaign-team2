import Image from "next/image";
import StatsBgImage from "../homeAssets/potaintal-home.jpeg";
import { useMediaQuery } from '@react-hook/media-query';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

export const StatisticsSection = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const CONTENT = [
    { metric: "حملة تنظيف", number: 50 },
    { metric: "كيس نفايات", number: 75000 },
    { metric: "متطوع", number: 10000 },
    { metric: "مدينة", number: 15 },
  ];

  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById('statisticsSection');
      if (element && !animationPlayed ) {
        setAnimationPlayed(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [animationPlayed]);

  return (
    <section
      id="statisticsSection"
      className="relative w-screen h-96 bg-sky-900"
    >
      <Image
        src={StatsBgImage}
        alt=""
        className="absolute object-cover w-full h-full opacity-20"
      />
      <div className={`absolute grid ${isTabletOrMobile?'grid-cols-2':'grid-cols-8'} place-content-center gap-x-10 gap-y-10 text-white text-opacity-100  left-0 right-0 mx-auto items-center w-full h-full`}>
        {!isTabletOrMobile?(<div className="col-span-2"></div>):(<></>)}
        {CONTENT.map((item, index) => (
          <div key={item.metric} className="flex flex-col items-center gap-4 md:gap-8">
            {animationPlayed ? (
              <CountUp start={0} end={item.number} duration={3} separator=","  className="text-3xl font-bold"/>
            ) : (
              <p className="text-3xl font-bold">0</p>
            )}
            <p className="text-lg">{item.metric}</p>
          </div>
        ))}
       {!isTabletOrMobile?(<div className="col-span-2"></div>):(<></>)}
      </div>
    </section>
  );
};
