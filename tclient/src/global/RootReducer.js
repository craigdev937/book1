import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TodoAPI } from "./TodoAPI";

export const RootReducer = configureStore({
    reducer: {
        [TodoAPI.reducerPath]: TodoAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
        .concat(TodoAPI.middleware),
});

setupListeners(RootReducer.dispatch);



