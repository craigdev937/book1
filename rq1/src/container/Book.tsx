import React from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchAllBooks } from "../global/FetchAPI";
import { Item } from "./Item";

export const Book = (): JSX.Element => {
    const { isLoading, error, isError, data } = 
    useQuery("books", fetchAllBooks);

    if (isError) return <span>`${error}`</span>;
    if (isLoading) return <Loader type="ThreeDots" 
                                color="#fff" 
                                height={30} />;
    
    return (
        <React.Fragment>
            <aside>
                <Link to="/create">Create a Book</Link>
            </aside>
            <hr />
            {data && data.map((book) => (
                <Item 
                    key={book.bid}
                    book={book}
                />
            ))}
        </React.Fragment>
    );
};




