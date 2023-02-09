import React from 'react';
import { useFetchCampaignsQuery } from '../../features/campaign/campaignsSlice';

const Campaigns = () => {
  const { data } = useFetchCampaignsQuery('21');
  console.log(data);
  
  return <div>{JSON.stringify(data)}</div>;
};

export default Campaigns;
