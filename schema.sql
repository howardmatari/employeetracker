DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE IF NOT EXISTS `employees`.`department` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE IF NOT EXISTS `employees`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(30) NULL,
  `salary` DECIMAL NULL,
  `department_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `department_id_idx` (`department_id` ASC),
  CONSTRAINT `department_id`
    FOREIGN KEY (`department_id`)
    REFERENCES `employees`.`department` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

    CREATE TABLE IF NOT EXISTS `employees`.`Employee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(30) NULL,
  `last_name` VARCHAR(30) NOT NULL,
  `role_id` INT NOT NULL,
  `Employee_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Employee_role1_idx` (`role_id` ASC),
  INDEX `fk_Employee_Employee1_idx` (`Employee_id` ASC),
  CONSTRAINT `fk_Employee_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `employees`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Employee_Employee1`
    FOREIGN KEY (`Employee_id`)
    REFERENCES `employees`.`Employee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


