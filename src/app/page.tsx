'use client';

import { AwernessSection } from "./homePageComponents/AwernessSection";
import { GoalsSection } from "./homePageComponents/GoalsSection";
import { HeroSection } from "./homePageComponents/HeroSection";
import { UpcommingEventsSection } from "./homePageComponents/UpcommingEventsSection";
import { VideoSection } from "./homePageComponents/VideoSection";
import { BlogSection } from "./homePageComponents/blogSection/BlogSection";

export default function Home() {
  return (
    <main className=" min-h-screen w-screen items-center justify-center overflow-hidden">
      <HeroSection/>
      <UpcommingEventsSection/>
      <AwernessSection/>
      <GoalsSection/>
      <VideoSection/>
      <BlogSection/>
    </main>
  )
}
