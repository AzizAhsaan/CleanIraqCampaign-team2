import Image, { StaticImageData } from "next/image"
import { useMediaQuery } from '@react-hook/media-query';
import { Container } from "@/global/components/Container";
import { SectionTitle } from "@/global/components/SectionTitle";
import usePreviousCampaigns from "./useFetchPreviousCampaigns";
import { TimeLine } from "./timeline/TimeLine";
import { LoadingTimeLine } from "./timeline/LoadingTimeLine";

export const PreviousCampaign = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
    const { loading, error, data } = usePreviousCampaigns();
  if (error) {
    return <div>Error: {error}</div>;
  }
  else{
      return (
    <section className="w-screen">
    <Container>
        <div className="text-center py-10 mb-20"><SectionTitle text="حملاتنا السابقة" /></div>
        {loading?(<LoadingTimeLine/>):( <TimeLine campaigns={data}/>)}
    </Container>
    </section>
  )
  }
}
