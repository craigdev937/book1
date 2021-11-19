import React from "react";
import { Form } from "../components/Form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { createBook } from "../global/FetchAPI";
import { IBook } from "../models/IBook";

export const Create = (): JSX.Element => {
    const navigate = useNavigate();
    const { isLoading, mutateAsync } = 
        useMutation(createBook);

    const onFormSubmit = async (data: IBook) => {
        await mutateAsync({...data});
        navigate("/");
    };

    return (
        <React.Fragment>
            <h1>Create New Book</h1>
            <Form 
                isLoading={isLoading}
                onFormSubmit={onFormSubmit} 
            />
        </React.Fragment>
    );
};





