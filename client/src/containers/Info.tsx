import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../types/IBook";

type Props = {
    book: IBook,
};

export const Info = ({book}: Props): JSX.Element => {
    return (
        <React.Fragment>
            <h2>
                <Link 
                    to={`/edit/${book.bid}`}
                    >{book.title}
                </Link>
            </h2>
            <main key={book.bid}>
                <h3>{book.author}</h3>
                <p>{book.info}</p>
                <p>{book.amount}</p>
                <footer>
                    <p>{book.published ? 
                        "Published" : 
                        "Not Published"}
                    </p>
                </footer>
            </main>
        </React.Fragment>
    );
};




