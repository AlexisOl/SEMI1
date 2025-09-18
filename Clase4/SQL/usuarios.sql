
create database rds_prueba;
use rds_prueba;

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(200) NOT NULL,
    password TEXT NOT NULL,
    pais VARCHAR(200) NOT NULL
);
