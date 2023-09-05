'use client';
import { CampaignsHero } from './components/CampaignsHero';
import { Upcomming } from './components/Upcomming';
import { PreviousCampaign } from './components/previousCampaigns/PreviousCampaign';

export default function Campaigns() {
  return (
    <main className="items-center justify-center w-screen min-h-screen overflow-hidden ">
      <CampaignsHero/> 
      <Upcomming/>
      <PreviousCampaign/>  
    </main>
  )
}