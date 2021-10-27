import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://localhost:9000/api/";
export const TodoAPI = createApi({
    reducerPath: "TodoAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Todo"],
    endpoints: (builder) => ({
        fetchAllTodos: builder.query({
            query: () => "/",
            transformResponse: (res) => res.reverse(),
            providesTags: ["Todo"],
        }),
        getOneTodo: builder.query({
            query: (bid) => `${bid}`,
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: "/",
                method: "POST",
                body: todo,
            }),
            invalidatesTags: ["Todo"],
        }),
        updateTodo: builder.mutation({
            query: ({ bid, ...todo }) => ({
                url: `${bid}`,
                method: "PUT",
                body: todo,
            }),
            invalidatesTags: ["Todo"],
        }),
        deleteTodo: builder.mutation({
            query: (bid) => ({
                url: `${bid}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Todo"],
        })
    }),
});





