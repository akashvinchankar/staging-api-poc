import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

interface ScheduleName {
  name: string;
}

const schedulesNameBaseQuery = async ({ id }: { id: number }) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/schedule_name?schedule_id=${id}`
    );
    const result = response.data;
    return { data: result };
  } catch (axiosError) {
    console.log(axiosError);
    throw axiosError;
  }
};

export const schedulesNameSlice = createApi({
  reducerPath: 'schedulesNameSlice',
  baseQuery: schedulesNameBaseQuery,
  serializeQueryArgs: (query: any) => query.queryArgs,
  keepUnusedDataFor: 28800,
  endpoints: (builder) => ({
    fetchSchedulesName: builder.query<ScheduleName, number>({
      query: (id) => {
        return { id };
      },
    }),
  }),
});

export const { useFetchSchedulesNameQuery } = schedulesNameSlice;
