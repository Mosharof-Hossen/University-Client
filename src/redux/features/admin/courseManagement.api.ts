import { TCourse, TFaculty, TRegisteredSemester } from "../../../types/courseManagement.type";
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
            providesTags: ["semester"],
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
            }),
            invalidatesTags: ["semester"]

        }),


        updateRegisteredSemester: builder.mutation({
            query: (args) => ({
                url: `/semester-registration/${args.id}`,
                method: "PATCH",
                body: args.data
            }),
            invalidatesTags: ["semester"]
        }),

        // Course 
        getAllCourses: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                console.log(args);
                if (args) {
                    args.forEach((item: TQueryParams) => {
                        params.append(item.name, item.value as string);
                    });
                }
                return {
                    url: "/courses",
                    params: params
                }

            },
            providesTags: ["course"],
            transformResponse: (res: TResponseRedux<TCourse[]>) => {
                return {
                    data: res?.data,
                    meta: res?.meta
                }
            }
        }),

        addCourse: builder.mutation({
            query: (data) => ({
                url: `/courses/create-course`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["course"]
        }),



        // Faculty
        getAllFaculties: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                console.log(args);
                if (args) {
                    args.forEach((item: TQueryParams) => {
                        params.append(item.name, item.value as string);
                    });
                }
                return {
                    url: "/faculties",
                    params: params
                }

            },
            providesTags: ["semester"],
            transformResponse: (res: TResponseRedux<TFaculty[]>) => {
                return {
                    data: res?.data,
                    meta: res?.meta
                }
            }
        }),

        assignFaculty: builder.mutation({
            query: (args) => {
                console.log(args);
                return {
                    url: `/courses/${args.id}/assign-faculties`,
                    method: "PUT",
                    body: args.data
                }
            },
            invalidatesTags: ["course"]
        }),

    })
})


export const { useAssignFacultyMutation, useGetAllFacultiesQuery, useAddCourseMutation, useGetAllCoursesQuery, useAddRegistrationSemesterMutation, useUpdateRegisteredSemesterMutation, useGetAllRegisteredSemestersQuery } = courseManagementApi;