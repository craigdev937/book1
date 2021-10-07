import React from "react";
import "./App.css";
import { Routes } from "../pages/Routes";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

const RQClient = new QueryClient();
export const App = (): JSX.Element => {
    return (
        <QueryClientProvider client={RQClient}>
            <React.Fragment>
                <BrowserRouter>
                    <Routes />
                    <ReactQueryDevtools initialIsOpen={false} />
                </BrowserRouter>
            </React.Fragment>
        </QueryClientProvider>
    );
};





