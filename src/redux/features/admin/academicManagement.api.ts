import { TAcademicSemester } from "../../../types/academicManagement.type";
import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: () => ({
                url: "/academic-semesters"
            }),
            transformResponse: (res: TResponseRedux<TAcademicSemester[]>) => {
                console.log({ res });
                return {
                    data: res.data,
                    meta: res.meta
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