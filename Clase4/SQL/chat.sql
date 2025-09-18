create database microservicioChat;
use microservicioChat;
CREATE TABLE mensaje (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comentario TEXT NOT NULL,
    fecha DATE NOT NULL,
    idUsuario INT NOT NULL
);
