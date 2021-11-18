import { IBook } from "../models/IBook";
const URL = "http://localhost:9000/api/";

export const fetchAllBooks =
async (): Promise<IBook[]> => {
    const res: Response = await fetch(URL);
    if (!res.ok) throw new Error("Couldn't fetch data");
    return res.json();
};

export const getOneBook =
async (book: IBook): Promise<IBook> => {
    const res: Response = 
    await fetch(`${URL}/${book.bid}`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({book}),
    });
    if (!res.ok) throw new Error("Couldn't fetch data");
    return res.json();
};

export const createBook =
async ({...data}: IBook): Promise<IBook> => {
    const res: Response = await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Couldn't fetch data");
    return res.json();
};

export const updateBook =
async ({bid, ...data}: IBook): Promise<IBook> => {
    const res: Response = 
    await fetch(`${URL}/${bid}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Couldn't fetch data");
    return res.json();
};

export const deleteBook =
async (bid: IBook): Promise<IBook> => {
    const res: Response = 
    await fetch(`${URL}/${bid}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error("Couldn't fetch data");
    return res.json();
};




