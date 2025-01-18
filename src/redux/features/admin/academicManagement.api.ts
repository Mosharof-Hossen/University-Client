import { TAcademicFaculty, TAcademicSemester } from "../../../types/academicManagement.type";
import { TQueryParams, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                // console.log(args);
                if (args) {
                    args.forEach((item: TQueryParams) => {
                        params.append(item.name, item.value as string);
                    });
                }
                return {
                    url: "/academic-semesters",
                    params: params
                }
            },
            transformResponse: (res: TResponseRedux<TAcademicSemester[]>) => {
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

        // ---------------------------- Academic Faculty----------------
        getallAcademicFaculty: builder.query({
            query: () => ({
                url: "/academic-faculties",
                method: "GET"
            }),
            transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
                return {
                    data: response.data
                }
            }
        }),

        addAcademicFaculty: builder.mutation({
            query: (data) => ({
                url: "/academic-faculties/create-academic-faculty",
                method: "POST",
                body: data
            })
        }),

        // ----------------------------- Academic Department ------------------
        getAllAcademicDepartment: builder.query({
            query: () => ({
                url: "/academic-department",
                method: "GET"
            }),
            transformResponse: (response) => {
                console.log(response);
                return response;
            }
        })






    })
})

export const { useGetAllAcademicDepartmentQuery, useGetAllSemestersQuery, useAddAcademicSemesterMutation, useAddAcademicFacultyMutation, useGetallAcademicFacultyQuery } = academicSemesterApi;