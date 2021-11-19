import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Book } from "../container/Book";
import { Create } from "../container/Create";
import { Update } from "../container/Update";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Book />} />
                <Route path="/create" element={<Create />} />
                <Route path="/update/:id" element={<Update />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);






