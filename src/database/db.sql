DROP DATABASE IF EXISTS dropdown_utility_ws;

CREATE DATABASE dropdown_utility_ws;

\c dropdown_utility_ws

CREATE TABLE IF NOT EXISTS countries (
  CountryID SERIAL PRIMARY KEY,
  CountryName VARCHAR(255) UNIQUE NOT NULL,
  CreatedTS TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);