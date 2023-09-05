import { Container } from "@/global/components/Container";
import { SectionTitle } from "@/global/components/SectionTitle";
import Link from "next/link";
import { ROUTES } from "@/app/routes";
import { useMediaQuery } from "@react-hook/media-query";
import { UpcommingEventsList } from "@/global/components/upcommingEvents/UpcommingList";

export const UpcommingEventsSection = () => {
      const list=[{},{},{},{},{},{}];
      const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  return (
    <section className="py-10 w-screen overflow-hidden text-gray2 font-normal px-4 ">
      {isTabletOrMobile?(<><div className="flex justify-between px-5 items-center">
          <Link className="underline" href={ROUTES.campaigns}>جميع الحملات</Link>
          <SectionTitle text="الحملات القادمة"/>
      </div>
           <UpcommingEventsList upcommingList={list}/></>):(<Container>
      <div className="flex justify-between px-5 items-center">
          <Link className="underline" href={ROUTES.campaigns}>جميع الحملات</Link>
          <SectionTitle text="الحملات القادمة"/>
      </div>
           <UpcommingEventsList upcommingList={list}/>
     </Container>)}

    </section>
  )
}