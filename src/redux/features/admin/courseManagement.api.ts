import { TRegisteredSemester } from "../../../types/courseManagement.type";
import { TQueryParams, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllRegisteredSemesters: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                console.log(args);
                if (args) {
                    args.forEach((item: TQueryParams) => {
                        params.append(item.name, item.value as string);
                    });
                }
                return {
                    url: "/semester-registration",
                    params: params
                }
            },
            transformResponse: (res: TResponseRedux<TRegisteredSemester[]>) => {
                return {
                    data: res?.data,
                    meta: res?.meta
                }
            }
        }),


        addRegistrationSemester: builder.mutation({
            query: (data) => ({
                url: "/semester-registration/create-semester-registration",
                method: "POST",
                body: data
            })
        }),


        updateRegisteredSemester: builder.mutation({
            query: (args) => ({
                url: `/semester-registration/${args.id}`,
                method: "PATCH",
                body: args.data
            })
        }),






    })
})


export const { useAddRegistrationSemesterMutation, useUpdateRegisteredSemesterMutation, useGetAllRegisteredSemestersQuery } = courseManagementApi;