export type TError = {
    data: {
        errorSources: { message: "string", path: string; }[];
        message: string;
        stack: string;
        success: boolean;
    }
}

export type TResponse = {
    data?: any;
    error?: TError;
}