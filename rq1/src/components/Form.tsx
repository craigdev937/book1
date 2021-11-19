import React from "react";
import Loader from "react-loader-spinner";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IBook } from "../models/IBook";

export const Form = 
({ defaultValues, onFormSubmit, isLoading }: any) => {
    const { register, handleSubmit } = 
    useForm<IBook>({ defaultValues });

    const onSubmit = async (data: IBook) => {
        onFormSubmit(data);
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <aside>
                    <label htmlFor="title">Title</label>
                    <input {...register("title")} />
                </aside>
                <aside>
                    <label htmlFor="title">Author</label>
                    <input {...register("author")} />
                </aside>
                <aside>
                    <label htmlFor="title">Info</label>
                    <input {...register("info")} />
                </aside>
                <aside>
                    <label htmlFor="title">Age</label>
                    <input {...register("amount")} />
                </aside>
                <aside>
                    <label htmlFor="title">Published?</label>
                    <input {...register("published")} />
                </aside>
                <button>
                    {isLoading ? 
                        <Loader 
                            type="ThreeDots" 
                            color="#fff" 
                            height={10} 
                        /> : "Submit" }
                </button>
            </form>
        </React.Fragment>
    );
};



