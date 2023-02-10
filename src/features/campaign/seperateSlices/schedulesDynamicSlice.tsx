import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

interface ScheduleData {
  name: string;
  days: string;
}

const schedulesDynamicBaseQuery = async ({
  id,
  type,
}: {
  id: number;
  type: string;
}) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/${type}?schedule_id=${id}`
    );
    console.log(response);
    const result = response.data;
    // console.log(result);
    return { data: result };
  } catch (axiosError) {
    console.log(axiosError);
    throw axiosError;
  }
};

export const schedulesDynamicSlice = createApi({
  reducerPath: 'schedulesDynamicSlice',
  baseQuery: schedulesDynamicBaseQuery,
  serializeQueryArgs: (query: any) => query.queryArgs,
  keepUnusedDataFor: 28800,
  endpoints: (builder) => ({
    fetchDynamicSchedules: builder.query<
      ScheduleData,
      { id: number; type: 'schedule_name' | 'days' }
    >({
      query: ({ id, type }: { id: number; type: 'schedule_name' | 'days' }) => {
        return { id, type };
      },
    }),
  }),
});

export const { useFetchDynamicSchedulesQuery } = schedulesDynamicSlice;
