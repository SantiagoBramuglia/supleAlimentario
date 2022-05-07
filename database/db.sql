-- Tabla de usuarios
CREATE DATABASE resultados;

USE resultados;

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL

);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =1;

DESCRIBE users;

-- Tabla de datos Personas
CREATE TABLE resultados(
    id INT(11) NOT NULL,
    Comedor VARCHAR(50) NOT NULL,
    Nombre  VARCHAR(50) NOT NULL,
    altura INT(4) NOT NULL,
    peso INT(4) NOT NULL,
    edad INT(4) NOT NULL,
    FechaNacimiento DATE NOT NULL,
    CantYougurt INT(4) NOT NULL,
    Cintura INT(4) NOT NULL
);

ALTER TABLE resultados {
    ADD PRIMARY KEY (id),
     MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =1
    
};
DESCRIBE resultados;







