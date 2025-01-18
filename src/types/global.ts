import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
    data: {
        errorSources: { message: "string", path: string; }[];
        message: string;
        stack: string;
        success: boolean;
    }
}

export type TMeta = {
    limit: string;
    page: string;
    total: string;
    totalPage: string;
}

export type TResponse<T> = {
    data?: T;
    meta?: TMeta;
    message?: string;
    success?: boolean;
    error?: TError;
}


export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
