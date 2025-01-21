import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // getAllSemesters: builder.query({
        //     query: (args) => {
        //         const params = new URLSearchParams();
        //         console.log(args);
        //         if (args) {
        //             args.forEach((item: TQueryParams) => {
        //                 params.append(item.name, item.value as string);
        //             });
        //         }
        //         return {
        //             url: "/academic-semesters",
        //             params: params
        //         }
        //     },
        //     transformResponse: (res: TResponseRedux<TAcademicSemester[]>) => {
        //         return {
        //             data: res.data,
        //             meta: res.meta
        //         }
        //     }
        // }),

        
        addRegistrationSemester: builder.mutation({
            query: (data) => ({
                url: "/semester-registration/create-semester-registration",
                method: "POST",
                body: data
            })
        }),

        




    })
})


export const {useAddRegistrationSemesterMutation} = courseManagementApi;