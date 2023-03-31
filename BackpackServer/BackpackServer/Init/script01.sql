-- -----------------------------------------------------
-- Schema CompTia
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `CompTia` ;

-- -----------------------------------------------------
-- Schema CompTia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `CompTia` DEFAULT CHARACTER SET utf8mb3 ;
USE `CompTia` ;


-- -----------------------------------------------------
-- Table `CompTia`.`Inventory`
-- -----------------------------------------------------


DROP TABLE IF EXISTS `CompTia`.`Inventory` ;

CREATE TABLE `Inventory` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Niveau` varchar(45) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Description` varchar(45) NOT NULL,
  `Active` tinyint DEFAULT '0' ,
  PRIMARY KEY (`Id`)
);


INSERT INTO `CompTia`.`Inventory` (`Niveau`,`Name`,`Description`,`Active`) VALUES ('Novice','CompTIA ITF+','blablabla', 1);

INSERT INTO `CompTia`.`Inventory` (`Niveau`,`Name`,`Description`,`Active`) VALUES ('Intermediate','CompTIA Network+','blablabla', 1);

INSERT INTO `CompTia`.`Inventory` (`Niveau`,`Name`,`Description`,`Active`) VALUES ('Expert','CompTIA CASP+','blablabla', 0);