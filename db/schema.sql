DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30)
);

CREATE TABLE role (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL(10, 2),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role (id),
  FOREIGN KEY (manager_id) REFERENCES employee (id)
);

-- Set up schema
-- Create DB
-- Tables: Department , Role, ID
-- Department: ID (INT), Name (VARCHAR(30))
-- Role: ID (INT), Name (VARCHAR(30)), Salary (Decimal), Department_ID (INT)
-- Employee: ID (INT), First Name (VARCHAR(30)), Last Name (VARCHAR(30)), Role_ID (INT), Mangager (INT)

-- Terminal
-- mysql -u root -p
-- cd db
-- source schema.sql
-- source seeds.sql
-- source query.sql
-- cd employee-tracker
-- node server.js