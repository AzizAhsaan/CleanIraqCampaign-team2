import React from 'react'
import HeroSection from './AboutUs-Components/HeroSection'
import WhoWeAreSection from './AboutUs-Components/WhoWeAreSection'
import CampaignMessageSection from './AboutUs-Components/CampaignMessageSection'
import MeetOurTeamSection from "./AboutUs-Components/MeetOurTeamSection"
import NavigationAboutUs from './AboutUs-Components/NavigationAboutUs'
import MediaBlog from "./AboutUs-Components/MediaBlog"
const AboutUs = () => {
  
  return (
    <main className=" min-h-screen pt-27 box-border	scroll-smooth	overflow-x-hidden	 ">
        <NavigationAboutUs  />
        <HeroSection />
        <WhoWeAreSection />
        <CampaignMessageSection />
        <MeetOurTeamSection />
        <MediaBlog />
    </main>
  )
}

export default AboutUs
