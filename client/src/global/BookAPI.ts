import { IBook } from "../types/IBook";
import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://localhost:9000/api";
export const BookAPI = createApi({
    reducerPath: "BookAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        fetchAll: builder.query<IBook[], void>({
            query: () => "/",
            providesTags: (result) => result ?
            [...result.map(({ bid }) => 
                ({ type: "Books" as const, id: bid })),
                { type: "Books", ID: "LIST" },
            ] : [{ type: "Books", id: "LIST" }],
        }),
    }),
});





