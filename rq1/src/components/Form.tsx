import React from "react";
import { useForm } from "react-hook-form";

export const Form = (): JSX.Element => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>

            </form>
        </React.Fragment>
    );
};



