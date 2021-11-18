import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { Book } from "../container/Book"

const RQClient = new QueryClient();

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <QueryClientProvider client={RQClient}>
                <Book />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </React.Fragment>
    );
};




