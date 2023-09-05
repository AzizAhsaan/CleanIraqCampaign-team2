import React from 'react'
import '../../../assets/style.css';
import IPreviousCampaigns from "../IPreviousCampaigns"
import { CampaignCard } from '../CampainsCard';

export const TimeLine = ({campaigns}:{campaigns:IPreviousCampaigns[]}) => {
  return ( <div className="main">
            <div className="container">
                <ul>
             { campaigns.map((item,index)=>(<li key={index}>
                        <CampaignCard item={item}/>
             </li>))}
                </ul>
            </div>
        </div>
  )
}

