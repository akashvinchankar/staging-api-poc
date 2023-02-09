import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

interface Order {
  id: number;
  orderId: string;
  govtRoNo: string;
  startDate: Date;
  endDate: Date;
  noOfSchedules: number;
  noOfScreens: number;
  totalTaken: number;
  totalNotTaken: number;
  totalPlayed: number;
  totalNotPlayed: number;
  spotsMaximum: number;
  spotsScheduled: number;
  spotsPlayed: number;
  spotsPossible: number;
  takenPercent: number;
  playedPercent: number;
  spotsPlayedPercent: number;
}

interface Orders {
  orders: Order[];
}

interface ApiResponse {
  data: Orders;
}

const campaignsBaseQuery = async ({ id }: { id: string }) => {
  try {
    const response = await axios.get(
      'https://admin-api.staging.qubeslate.com/api/v0/orders/page/2?from=24-Oct-22&to=24-Oct-22'
    );
    const result = response.data;
    return { data: result.orders } as ApiResponse;
  } catch (axiosError) {
    console.log(axiosError);
    throw axiosError;
  }
};

export const campaignsSlice = createApi({
  reducerPath: 'campaignsSlice',
  baseQuery: campaignsBaseQuery,
  serializeQueryArgs: (query: any) => query.queryArgs,
  keepUnusedDataFor: 28800,
  endpoints: (builder) => ({
    fetchCampaigns: builder.query<Orders, string>({
      query: (id) => {
        return { id };
      },
    }),
  }),
});

export const { useFetchCampaignsQuery } = campaignsSlice;
