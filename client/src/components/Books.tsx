import React from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import { Item } from "../containers/Item";
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
                <Item 
                    bid={book.bid}
                    title={book.title}
                    author={book.author}
                    info={book.info}
                    amount={book.amount}
                    published={book.published}
                />
            ))}
        </React.Fragment>
    );
};




