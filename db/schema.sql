CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id int primary key auto_increment,
    burger_name VARCHAR(255),
    devoured BOOLEAN not null default 0
);

