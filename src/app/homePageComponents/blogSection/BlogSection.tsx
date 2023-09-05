import { Container } from "@/global/components/Container";
import { SectionTitle } from "@/global/components/SectionTitle";
import Link from "next/link";
import { ROUTES } from "@/app/routes";
import { BlogList } from "./BlogList";

export const BlogSection = () => {
      const list=[{},{},{},{},{},{}]
  return (
    <section className="py-4 w-screen overflow-hidden ">
      <Container>
      <div className="flex justify-between px-5 items-center">
          <Link className="underline" href={ROUTES.blog}>المدونة</Link>
          <SectionTitle text="اخر الاخبار"/>
      </div>
           <BlogList blogs={list}/>
     </Container>
    </section>
  )
}