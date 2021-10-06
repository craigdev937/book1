CREATE DATABASE book1;

CREATE TABLE books(
    bid serial PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    info TEXT,
    amount INTEGER,
    published boolean
);


