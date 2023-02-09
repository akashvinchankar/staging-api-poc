import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

interface Schedule {
  date_created: string;
  start_date: string;
  end_date: string;
  advertisement: string;
  position: string;
  preferential_position: string;
  shows: string;
  days: string;
  repetition: number;
}

interface ApiResponse {
  data: Schedule;
}

const schedulesBaseQuery = async ({ id }: { id: number }) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/schedule?schedule_id=${id}`
    );
    const result = response.data;
    return { data: result } as ApiResponse;
  } catch (axiosError) {
    console.log(axiosError);
    throw axiosError;
  }
};

export const schedulesSlice = createApi({
  reducerPath: 'schedulesSlice',
  baseQuery: schedulesBaseQuery,
  serializeQueryArgs: (query: any) => query.queryArgs,
  keepUnusedDataFor: 28800,
  endpoints: (builder) => ({
    fetchSchedules: builder.query<Schedule, number>({
      query: (id) => {
        return { id };
      },
    }),
  }),
});

export const { useFetchSchedulesQuery } = schedulesSlice;
