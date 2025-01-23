import { TQueryParams, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const studentCourseApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getOfferedCourse: builder.query({
                    query: (args) => {
                        const params = new URLSearchParams();
                        console.log(args);
                        if (args) {
                            args.forEach((item: TQueryParams) => {
                                params.append(item.name, item.value as string);
                            });
                        }
                        return {
                            url: "/offered-course",
                            params: params
                        }
                    },
                    transformResponse: (res: TResponseRedux<any[]>) => {
                        return {
                            data: res.data,
                            meta: res.meta
                        }
                    }
                }),


    })
})


export const { } = studentCourseApi;