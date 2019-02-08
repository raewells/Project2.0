DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;
USE exampledb;

CREATE TABLE users (
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
username VARCHAR(20) NOT NULL,
email VARCHAR(100) NOT NULL,
created_at TIMESTAMP DEFAULT NOW(),
PRIMARY KEY (id)
);

CREATE TABLE meals (
meal_id INT AUTO_INCREMENT NOT NULL,
meal_name VARCHAR(100) NOT NULL,
ingredient_1 VARCHAR (50),
ingredient_2 VARCHAR (50),
ingredient_3 VARCHAR (50),
ingredient_4 VARCHAR (50),
ingredient_5 VARCHAR (50),
ingredient_6 VARCHAR (50),
ingredient_7 VARCHAR (50),
ingredient_8 VARCHAR (50),
ingredient_9 VARCHAR (50),
ingredient_10 VARCHAR (50),
total_cals FLOAT (8,0),
created_at TIMESTAMP DEFAULT NOW(),
user_id INT,
PRIMARY KEY (meal_id),
FOREIGN KEY (user_id) REFERENCES users(id)
);