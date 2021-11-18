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
                ({ type: "Books" as const, bid: bid })),
                { type: "Books", ID: "LIST" },
            ] : [{ type: "Books", id: "LIST" }],
        }),
        getOne: builder.query<IBook, string>({
            query: (bid) => `/${bid}`,
            providesTags: (result, error, bid) => 
                [{ type: "Books", bid: bid }],
        }),
        add: builder.mutation<IBook, IBook>({
            query: (book) => {
                return {
                    url: `/`,
                    method: "POST",
                    body: book,
                }
            },
            invalidatesTags: [{ type: "Books", id: "LIST" }],
        }),
        edit: builder.mutation<IBook, IBook>({
            query: ({ bid, ...book }) => ({
                url: `/${bid}`,
                method: "PUT",
                body: book,
            }),
            invalidatesTags: [{ type: "Books", id: "LIST" }],
        }),
        delete: builder.mutation<IBook, string>({
            query: (bid) => ({
                url: `/${bid}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Books", id: "LIST" }],
        }),
    }),
});





