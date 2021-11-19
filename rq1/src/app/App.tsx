import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { Main } from "../pages/Main";

const RQClient = new QueryClient();

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <QueryClientProvider client={RQClient}>
                <Main />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </React.Fragment>
    );
};




