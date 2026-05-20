CREATE DATABASE backend;
USE backend;
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(100)
);