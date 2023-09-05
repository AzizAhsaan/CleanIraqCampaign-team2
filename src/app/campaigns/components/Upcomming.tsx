import { Container } from "@/global/components/Container";
import { SectionTitle } from "@/global/components/SectionTitle";
import { UpcommingEventsList } from "@/global/components/upcommingEvents/UpcommingList";
import { useMediaQuery } from "@react-hook/media-query";

export const Upcomming = () => {
      const list=[{},{},{},{},{},{}];
      const isTabletOrMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className="py-10 w-screen px-10 items-center justify-center overflow-hidden ">
   {isTabletOrMobile?(<><div className="text-end "><SectionTitle text="الحملات القادمة" isPrimaryColor={true}/></div>
           <UpcommingEventsList upcommingList={list}/></>):(
           <Container><div className="text-end "><SectionTitle text="الحملات القادمة" isPrimaryColor={true}/></div>
           <UpcommingEventsList upcommingList={list}/></Container>)}
         
    </section>
  )
}