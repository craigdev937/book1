import React from "react";
import { useQuery } from "react-query";
import { fetchAllBooks } from "../global/FetchAPI";

export const Book = (): JSX.Element => {
    const { isLoading, error, isError, data } = 
    useQuery("books", fetchAllBooks);

    if (isLoading) return <aside>Loading...</aside>;
    if (isError) return <span>`${error}`</span>;

    return (
        <React.Fragment>
            {data && data.map((book) => (
                <main key={book.bid}>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <p>{book.info}</p>
                    <p>Age {book.amount}</p>
                    <p>{book.published ? "Published" 
                        : "Unpublished"}
                    </p>
                </main>
            ))}
        </React.Fragment>
    );
};




