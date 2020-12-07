CREATE DATABASE users_prod;
CREATE DATABASE users_dev;

USE users_dev;


CREATE TABLE recipes
(
    recipe_id INT NOT NULL,
    recipe_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (recipe_id),
    UNIQUE (recipe_name)
);

INSERT INTO recipes
    (recipe_id, recipe_name)
VALUES
    (1, "Tacos"),
    (2, "Tomato Soup"),
    (3, "Grilled Cheese");