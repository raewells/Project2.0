DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;
USE exampledb;

-- CREATE TABLE users
-- (
--     username VARCHAR(20) NOT NULL,
--     first_name VARCHAR(100) NOT NULL,
--     last_name VARCHAR(100) NOT NULL,
--     googleId VARCHAR(100) NOT NULL,
--     created_at DATE,
--     updated_at DATE,
--     PRIMARY KEY (username)
-- );

-- CREATE TABLE meals
-- (

--     meal_id INT AUTO_INCREMENT NOT NULL,

--     meal_id INT
--     AUTO_INCREMENT NOT NULL,

-- meal_name VARCHAR
--     (100) NOT NULL,
-- ingredient_1 VARCHAR
--     (50),
-- amount_1 INTEGER
--     (11),
-- ingredient_2 VARCHAR
--     (50),
-- amount_2 INTEGER
--     (11),
-- ingredient_3 VARCHAR
--     (50),
-- amount_3 INTEGER
--     (11),
-- ingredient_4 VARCHAR
--     (50),
-- amount_4 INTEGER
--     (11),
-- ingredient_5 VARCHAR
--     (50),
-- amount_5 INTEGER
--     (11),
-- ingredient_6 VARCHAR
--     (50),
-- amount_6 INTEGER
--     (11),
-- ingredient_7 VARCHAR
--     (50),
-- amount_7 INTEGER
--     (11),
-- ingredient_8 VARCHAR
--     (50),
-- amount_8 INTEGER
--     (11),
-- ingredient_9 VARCHAR
--     (50),
-- amount_9 INTEGER
--     (11),
-- ingredient_10 VARCHAR
--     (50),
-- amount_10 INTEGER
--     (11),
-- total_cals FLOAT
--     (8,0),
--     total_fat FLOAT
--     (8,0),
--     total_carbs FLOAT
--     (8,0),
--     total_protein FLOAT
--     (8,0),
--     total_sugar FLOAT
--     (8,0),

--     createdAt DATE,
--     updatedAt DATE,

--     created_at DATE,
--     updated_at DATE,

-- created_by_user VARCHAR
--     (20),
-- PRIMARY KEY
--     (meal_id),
-- FOREIGN KEY
--     (created_by_user) REFERENCES users
--     (username)
-- );

--     CREATE TABLE searches
--     (
--         id INTEGER NOT NULL
--         AUTO_INCREMENT,
--     search VARCHAR
--         (80),
--     amount INTEGER
--         (11),

--     createdAt DATE,
--     updatedAt DATE,
--     PRIMARY KEY
--         (id)
-- );

--     created_at DATE,
--     updated_at DATE,
--     PRIMARY KEY
--         (id)
-- );

        -- INSERT INTO users
        --     (first_name, last_name, username, email)
        -- VALUES
        --     ("Kenton", "Kirlin", 'Kenton_Kirlin', 'yaboyKK@gmail.com'),
        --     ("Cardi", "B", 'trashcitygirl', 'bloodyshoes@gmail.com');

        -- INSERT INTO meals
        --     (meal_name, ingredient_1, ingredient_2, ingredient_3, total_cals, created_by_user)
        -- VALUES
        --     ("Grilled Cheese", "Bread", "Cheese", "Hot Sauce", 1000, 'Kenton_Kirlin'),
        --     ("Diet", "Celery", "Water", "Lettuce", 23.54, 'trashcitygirl'),
        --     ("Dessert", "Chocolate", "Ice Cream", "Strawberries", 800.54, 'trashcitygirl');

        -- SELECT username, meal_name, ingredient_1, ingredient_2, ingredient_3, total_cals
        -- FROM users, meals
        -- WHERE meals.created_by_user = users.username
        -- GROUP BY username
        -- ORDER BY meal_id;

