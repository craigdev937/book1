import { pool } from "../config/database.js";

export const CreateBook = 
async (req, res, next) => {
    try {
        const { title, author, info, amount, published } = req.body;
        const createQuery = `INSERT INTO books 
        (title, author, info, amount, published) 
        VALUES($1, $2, $3, $4, $5) RETURNING *`;
        const values = [title, author, info, amount, published];
        const newBook = await pool.query(createQuery, values);
        res.status(201).json(newBook.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const FetchAllBooks = 
async (req, res, next) => {
    try {
        const fetchAllQry = "SELECT * FROM books";
        const allBooks = await pool.query(fetchAllQry);
        res.json(allBooks.rows);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetOneBook =
async (req, res, next) => {
    try {
        const { bid } = req.params;
        const getOneQuery = `SELECT * FROM books WHERE bid = $1`;
        const values = [bid];
        const book = await pool.query(getOneQuery, values);
        res.json(book.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const UpdateBook =
async (req, res, next) => {
    try {
        const { bid } = req.params;
        const { title, author, info, amount, published } = req.body;
        const updateQry = `UPDATE books 
        SET title = $1, author = $2, info = $3, 
        amount = $4, published = $5 
        WHERE bid = $6 RETURNING *`;
        const values = [title, author, info, amount, published, bid];
        const updateBook = await pool.query(updateQry, values);
        res.status(201).json("The Book was Updated!");
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const DeleteBook =
async (req, res, next) => {
    try {
        const { bid } = req.params;
        const deleteQry = "DELETE FROM books WHERE bid = $1";
        const values = [bid];
        const deleteBook = await pool.query(deleteQry, values);
        res.status(200).json("The Book was Deleted!");
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};





