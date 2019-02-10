DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;
USE exampledb;

CREATE TABLE users
(
    username VARCHAR(20) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (username)
);

CREATE TABLE meals
(
    meal_id INT
    AUTO_INCREMENT NOT NULL,
meal_name VARCHAR
    (100) NOT NULL,
ingredient_1 VARCHAR
    (50),
ingredient_2 VARCHAR
    (50),
ingredient_3 VARCHAR
    (50),
ingredient_4 VARCHAR
    (50),
ingredient_5 VARCHAR
    (50),
ingredient_6 VARCHAR
    (50),
ingredient_7 VARCHAR
    (50),
ingredient_8 VARCHAR
    (50),
ingredient_9 VARCHAR
    (50),
ingredient_10 VARCHAR
    (50),
total_cals FLOAT
    (8,0),
created_at TIMESTAMP DEFAULT NOW
    (),
created_by_user VARCHAR
    (20),
PRIMARY KEY
    (meal_id),
FOREIGN KEY
    (created_by_user) REFERENCES users
    (username)
);

    INSERT INTO users
        (first_name, last_name, username, email, created_at)
    VALUES
        ("Kenton", "Kirlin", 'Kenton_Kirlin', 'yaboyKK@gmail.com', '2017-02-16 18:22:10.846'),
        ("Cardi", "B", 'trashcitygirl', 'bloodyshoes@gmail.com', '2016-09-11 18:51:56.965');

    INSERT INTO meals
        (meal_name, ingredient_1, ingredient_2, ingredient_3, total_cals, created_at, created_by_user)
    VALUES
        ("Grilled Cheese", "Bread", "Cheese", "Hot Sauce", 1000, '2017-02-16 18:22:10.846', 'Kenton_Kirlin'),
        ("Diet", "Celery", "Water", "Lettuce", 23.54, '2016-09-11 18:51:56.965', 'trashcitygirl');
        ("Dessert","Chocolate", "Ice Cream", "Strawberries", 800.54, '2016-09-11 18:51:56.965', 'trashcitygirl');

    SELECT username, meal_name, ingredient_1, ingredient_2, ingredient_3, total_cals
    FROM users, meals
    WHERE meals.created_by_user = users.username
    ORDER BY meal_id;