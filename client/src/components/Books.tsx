import React from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import { fetchAllBooks } from "../global/FetchAPI";

export const Books = (): JSX.Element => {
    const { isLoading, error, isError, data } = 
    useQuery("books", fetchAllBooks);

    if (isLoading) return <Loader type="Circles" />
    if (isError) return <span>Error: {`${error}`}</span>
    return (
        <React.Fragment>
            <h1>Books</h1>
            {data?.map((book) => (
                <main key={book.bid}>
                    <h2>{book.title}</h2>
                    <h3>by {book.author}</h3>
                    <p>Synopsis, {book.info}</p>
                    <p>${book.amount}</p>
                </main>
            ))}
        </React.Fragment>
    );
};




