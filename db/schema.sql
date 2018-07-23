

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL,
	burger_name varchar(127) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT now(),
	PRIMARY KEY (id)
);
