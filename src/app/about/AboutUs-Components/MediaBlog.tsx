'use client'
import React, { useEffect, useRef } from 'react';
import Image ,{ StaticImageData }  from 'next/image';
import Eductionalcontentpart1photo1 from "../BlogAssets/Eductionalcontentpart1photo1.jpg"
import Eductionalcontentpart1photo2 from "../BlogAssets/Eductionalcontentpart1photo2.jpg"
import Eductionalcontentpart1photo3 from "../BlogAssets/Eductionalcontentpart1photo3.jpg"
import Eductionalcontentpart1photo4 from "../BlogAssets/Eductionalcontentpart1photo4.jpg"
import Eductionalcontentpart1photo5 from "../BlogAssets/Eductionalcontentpart1photo5.jpg"
import Eductionalcontentpart1photo6 from "../BlogAssets/Eductionalcontentpart1photo6.jpg"
import Eductionalcontentpart1photo7 from "../BlogAssets/Eductionalcontentpart1photo7.jpg"
import Eductionalcontentpart2photo1 from "../BlogAssets/Eductionalcontentpart2photo1.jpg"
import Eductionalcontentpart2photo2 from "../BlogAssets/Eductionalcontentpart2photo2.jpg"
import Eductionalcontentpart2photo3 from "../BlogAssets/Eductionalcontentpart2photo3.jpg"
import Eductionalcontentpart2photo4 from "../BlogAssets/Eductionalcontentpart2photo4.jpg"
import Eductionalcontentpart2photo5 from "../BlogAssets/Eductionalcontentpart2photo5.jpg"
import Eductionalcontentpart2photo6 from "../BlogAssets/Eductionalcontentpart2photo6.jpg"
import Eductionalcontentpart3photo1 from "../BlogAssets/Eductionalcontentpart3photo1.jpg"
import Eductionalcontentpart4photo1 from "../BlogAssets/Eductionalcontentpart4photo1.jpg"
import styles from "../Assets/css.module.css"
interface Article{
    id:number
    src:string | StaticImageData,
    alt:string

}
interface Video {
    id: number;
    title: string;
    paragraph:string
    url: string
    date:string 
}
const MediaBlog: React.FC = () => {

    const MassMedia:Video[]=[
        {
            id:1,
            title:"قناة دجلة الفضائية ",
            paragraph:"بهدف نشر ثقافة النظافة .. اطلاق حملة سفراء النظافة في الديوانية",
            url:"https://www.youtube.com/embed/81e7gW43vI4",
            date:"2022/12/11"
        },
        {
            id:2,
            title:"قناة الغد",
            paragraph:"ضفاف دجلة تتنفس بأيدي سفراء النظافة",
            url:"https://www.youtube.com/embed/hC7j8l9Uy5Q",
            date:'2022/11/4',
        },{
            id:3,
            title:"قناة الجزائر الدولية",
            paragraph:"سفراء النظافة، شباب يتطوعون ليعيش العراق بمحبة وسلام",
            url:"https://www.youtube.com/embed/RLG65GfTp3M",
            date:'2022/3/31',
        },{
            id:4,
            title:"قناة الفلوجة-الأخبار",
            paragraph:"سفراء النظافة يواصلون إنعاش نهر دجلة بتنظيف ضفافه",
            url:"https://www.youtube.com/embed/3bOlZ9LwcT4",
            date:'2022/4/10',
        },
    ]
    useEffect(() => {
        const qs = (selector: string, all = false) => {
            return all ? document.querySelectorAll(selector) : document.querySelector(selector);
        };
        
        const sections = qs(`.${styles.section}`, true) as NodeListOf<HTMLElement>;
        const timeline = qs(`.${styles.timeline}`) as HTMLElement;
        const line = qs(`.${styles.line}`) as HTMLElement;
        line.style.bottom = `calc(100% - 20px)`;
        let prevScrollY = window.scrollY;
        let up: boolean, down: boolean;
        let full = false;
        let set = 0;
        const targetY = window.innerHeight * 0.8;

        const scrollHandler = (e: Event) => {
            const { scrollY } = window;
            up = scrollY < prevScrollY;
            down = !up;
            const timelineRect = timeline.getBoundingClientRect();
            const lineRect = line.getBoundingClientRect();
            const dist = targetY - timelineRect.top;
            console.log(dist);

            if (down && !full) {
                set = Math.max(set, dist);
                line.style.bottom = `calc(100% - ${set}px)`;
            }

            if (dist > timeline.offsetHeight + 50 && !full) {
                full = true;
                line.style.bottom = `-50px`;
            }

            sections.forEach(item => {
                const rect = item.getBoundingClientRect();
                if (rect.top + item.offsetHeight / 5 < targetY) {
                    item.classList.add(styles['showme']);
                }
            });
            
            prevScrollY = window.scrollY;
        };

        scrollHandler({} as Event);
        line.style.display = 'block';
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);


      return (
        <section id='MediaBlog' className={`${styles['min-h-screen']} flex flex-col items-center p-8 pl-9 pr-9 w-[98%] md:w-[90%] mx-auto mt-5 rounded-3xl `}>
            <div className={styles.container}>
                <div className={styles.topsection}>
                    <h1 className='2xl:text-[5rem] xl:text-[5rem] lg:text-[5rem] md:text-[5rem] 2sm:text-[3rem] text-secondary '>الاعلام</h1>
                </div>
                <div id='SectionMediaBlog' className={styles.timeline}>
                    <div className={styles.line}></div>
                    {MassMedia.map((Media) => (
                        <div className={styles.section} key={Media.id}>
                            <div className={styles.bead}></div>
                            <div className={styles.content}>
                            <div>
        <div className=" flex flex-col w-full    ">
        <span className="2xl:text-[1.5rem] xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.2rem] 2sm:text-[1rem] text-end">{Media.date}</span>

        <div className="relative">
            <iframe
                                    src={Media.url}
                                    width="100%"
                                    className={`${styles.responsiveIframe}`}
                                ></iframe>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg   h-full py-6 w-full text-center bg-[#f3f7f5] shadow-lg shadow-gray-300	">
            <h2 className="2xl:text-[2rem] xl:text-[2rem] lg:text-[2rem] md:text-[2rem] 2sm:text-[0.8rem] text-gray2 font-bold">{Media.title}</h2>
            <div className="flex gap-10">
            <div className="flex flex-col items-center">
                <span className="text-secondary 2xl:text-[1rem] xl:text-[1rem] lg:text-[1rem] md:text-[1rem] 2sm:text-[0.6rem] font-semibold ">{Media.paragraph}</span>
            </div>
         </div>
        </div>
    </div>
</div>
                              
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaBlog;