import { useState, useEffect } from 'react';
import IPreviousCampaigns from './IPreviousCampaigns';
import mapPreviousCampaigns from './IPreviousCampaigns';
import { toast } from 'react-hot-toast';

const usePreviousCampaigns = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState<IPreviousCampaigns[]>([]);

  useEffect(() => {
    const fetchPreviousData = async () => {
      try {
        const response = await fetch("https://clean-iraq-campaigns.murtadha-altameemi2156.workers.dev/");
        const jsonData = await response.json();
        const mappedData = jsonData.map(mapPreviousCampaigns);
        setData(mappedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
        toast.error("حدث خطا ما يرجى اعادة المحاولة")
        setLoading(false);
      }
    };

    fetchPreviousData();
  }, []);

  return { loading, error, data };
};

export default usePreviousCampaigns;