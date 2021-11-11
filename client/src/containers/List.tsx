import React from "react";
import { Link } from "react-router-dom";
import { Info } from "./Info";
import { BookAPI } from "../global/BookAPI";

export const List = (): JSX.Element => {
    const { data } = BookAPI.useFetchAllQuery();
    
    return (
        <React.Fragment>
            <header>
                <Link to="/add">Add Book</Link>
            </header>
            {data && data.map((book) => (
                <Info 
                    key={book.bid}
                    book={book}
                />
            ))}
        </React.Fragment>
    );
};




