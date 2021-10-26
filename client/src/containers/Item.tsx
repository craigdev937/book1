import React from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useQueryClient, useMutation } from "react-query";
import { deleteBook } from "../global/FetchAPI";
import { IBook } from "../models/IBook";

export const Item = 
({ bid, title, author, info, amount }: IBook): JSX.Element => {
    const queryClient = useQueryClient();
    const { isLoading, mutateAsync } = useMutation(deleteBook);

    const remove = async () => {
        await mutateAsync(bid);
        queryClient.invalidateQueries("books");
    };

    return (
        <React.Fragment>
            <Link to={`/update/${bid}`} {...title}></Link>
        </React.Fragment>
    );
};





