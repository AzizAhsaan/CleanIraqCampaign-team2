export default interface IPreviousCampaigns {
  date: string;
  province: string;
  gps_lat: number;
  gps_lon: number;
  Photos: CampaignPhoto[];
  trashBagsNumber: number;
  location_describtion: string;
  volenteers: number;
  location_describtion_ar: string;
}

export default function mapPreviousCampaigns(json: any) {
  return {
    date: json.Date,
    province: json.Province,
    gps_lat: json["GPS Lat"],
    gps_lon: json["GPS Lon"],
    Photos: json.Photos,
    trashBagsNumber: json["Number of Trash Bags"],
    location_describtion: json["Location Description"],
    volenteers: json["Number of Volunteers"],
    location_describtion_ar: json["Location Description Arabic"]
  };
}
export interface CampaignPhoto {
  small: {
    url: string;
    width: number;
    height: number;
  };
  large: {
    url: string;
    width: number;
    height: number;
  };
  full: {
    url: string;
    width: number;
    height: number;
  };
}