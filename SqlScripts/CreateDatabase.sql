DROP DATABASE IF EXISTS hitw;

CREATE DATABASE hitw;

USE hitw;

# Create the tables here
CREATE TABLE pet (name VARCHAR(20), owner VARCHAR(20),
       species VARCHAR(20), sex CHAR(1), birth DATE, death DATE);