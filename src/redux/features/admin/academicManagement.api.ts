import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: () => ({
                url: "/academic-semesters"
            }),
            transformResponse: (res) => {
                return {
                    data: res.data.result,
                    meta: res.data.meta
                }
            }
        }),
        addAcademicSemester: builder.mutation({
            query: (data) => ({
                url: "/academic-semesters/create-academic-semester",
                method: "POST",
                body: data
            })
        }),
    })
})

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation } = academicSemesterApi;