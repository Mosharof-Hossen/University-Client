
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
import { toast } from "sonner";

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

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);
    // console.log(result);
    if (result?.error?.status === 400) {
        toast.error(result?.error?.data?.message as string || "Something Went wrong")
    }
    if (result.error?.status === 401) {
        const res = await fetch("http://localhost:2000/api/v1/auth/refresh-token", {
            method: "POST",
            credentials: "include"
        })
        const data = await res.json();
        if (data?.data?.accessToken) {
            const user = (api.getState() as RootState).auth.user;
            api.dispatch(
                setUser({
                    user, token: data.data.accessToken,
                })
            )
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }
    return result;
}

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ["semester",'course'],
    endpoints: () => ({})
})