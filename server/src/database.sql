CREATE DATABASE book1;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE books(
    bid uuid DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    info TEXT,
    amount INTEGER,
    published boolean
);


