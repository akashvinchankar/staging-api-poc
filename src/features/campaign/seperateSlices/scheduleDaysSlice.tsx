import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

interface ScheduleDays {
  days: string;
}

// base query for getting days by passing an id using axios
const schedulesDaysBaseQuery = async ({ id }: { id: number }) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/days?schedule_id=${id}`
    );
    const result = response.data;
    return { data: result };
  } catch (axiosError) {
    console.log(axiosError);
    throw axiosError;
  }
};

// creating a caching endpoint for days
export const schedulesDaysSlice = createApi({
  reducerPath: 'schedulesDaysSlice',
  baseQuery: schedulesDaysBaseQuery,
  serializeQueryArgs: (query: any) => query.queryArgs,
  keepUnusedDataFor: 28800,
  endpoints: (builder) => ({
    fetchSchedulesDays: builder.query<ScheduleDays, number>({
      query: (id) => {
        return { id };
      },
    }),
  }),
});

export const { useFetchSchedulesDaysQuery } = schedulesDaysSlice;
