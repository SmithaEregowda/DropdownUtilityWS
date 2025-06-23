BEGIN;

TRUNCATE TABLE countries RESTART IDENTITY CASCADE;
TRUNCATE TABLE states RESTART IDENTITY CASCADE;

INSERT INTO countries (CountryID,CountryName,CreatedTS) values
(1, 'India', CURRENT_TIMESTAMP),
(2, 'United States', CURRENT_TIMESTAMP),
(3, 'Canada', CURRENT_TIMESTAMP),
(4, 'Australia', CURRENT_TIMESTAMP),
(5, 'Germany', CURRENT_TIMESTAMP),
(6, 'Brazil', CURRENT_TIMESTAMP),
(7, 'Japan', CURRENT_TIMESTAMP),
(8, 'South Africa', CURRENT_TIMESTAMP),
(9, 'France', CURRENT_TIMESTAMP),
(10, 'Mexico', CURRENT_TIMESTAMP);

INSERT INTO states (StateName,countryId) values
('Karnataka', 1),
('Maharashtra', 1),
('Tamil Nadu', 1),
('California', 2),
('Texas', 2),
('New York', 2),
('Ontario', 3),
('British Columbia', 3),
('Quebec', 3),
('Bavaria', 4),
('Berlin', 4),
('Hesse', 4),
('New South Wales', 5),
('Victoria', 5),
('Queensland', 5);

INSERT INTO cites (CityName,StateId) values
('Bengaluru', 1),
('Mysuru',     1),
('Mangaluru',  1),
('Mumbai',    2),
('Pune',      2),
('Nagpur',    2),
('Chennai',     3),
('Coimbatore',  3),
('Madurai',     3),
('Los Angeles',    4),
('San Francisco',  4),
('San Diego',      4),
('Houston',   5),
('Dallas',    5),
('Austin',    5),
('Vancouver', 8),
('Victoria',  8),
('Kelowna',   8),
('Montreal', 9),
('Quebec City', 9),
('Laval',     9),
('Munich',   10),
('Nuremberg',10),
('Augsburg', 10),
('Sydney',             13),
('Newcastle',          13),
('Wollongong',         13);

COMMIT;