import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:2000/api/v1",
    credentials: "include",
    prepareHeaders: (header, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            header.set("authorization", `${token}`)
        }
        return header;
    }

})

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQuery,
    endpoints: () => ({})
})