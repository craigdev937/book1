import React from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { IBook } from "../models/IBook";
import { deleteBook } from "../global/FetchAPI";
import { useQueryClient, useMutation } from "react-query";

type Props = {
    book: IBook,
};

export const Item = ({book}:  Props) => {
    const queryClient = useQueryClient();
    const { isLoading, mutateAsync } = 
        useMutation(deleteBook);

    const remove = async () => {
        await mutateAsync(book);
        queryClient.invalidateQueries("books");
    };

    return (
        <React.Fragment>
            <Link to={`/update/${book.bid}`}
                >{book.title}
            </Link>
            <aside>
                <p>{book.author}</p>
                <p>Age: {book.amount}</p>
                <p>{book.info}</p>
                <p>{book.published 
                    ? "Published" 
                    : "Unpublished"}</p>
                <button onClick={remove}>
                    { isLoading ? 
                        <Loader 
                            type="ThreeDots" 
                            color="#fff" 
                            height={10} /> 
                    : "Remove"}
                </button>
            </aside>
            <hr />
        </React.Fragment>
    );
};




