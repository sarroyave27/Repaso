CREATE DATABASE PERSON COLLATE "UTF8_GENERAL_CI"


CREATE TABLE USERS (
    ID INT(8) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    NAME VARCHAR(50)
)

-- Procedimiento almacenados
CREATE PROCEDURE `spInsertUser`(IN `_NAME` VARCHAR(50)) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
BEGIN   
    INSERT INTO USERS (NAME) VALUES (_NAME);
END;

CREATE PROCEDURE `spFindAllUser`() NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
BEGIN   
    SELECT ID, NAME FROM USERS; 
END; 

CREATE PROCEDURE `spFindUser`(IN `_ID` INT(8)) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
BEGIN 
    SELECT ID, NAME FROM USERS WHERE ID = _ID; 
END;

CREATE PROCEDURE `spUpdateUser`(IN `_ID` INT(8), IN `_NAME` VARCHAR(50)) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
BEGIN 
    UPDATE USERS SET NAME = _NAME WHERE ID = _ID; 
END;

CREATE PROCEDURE `spDeleteUser`(IN `_ID` INT(8)) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER 
BEGIN 
    DELETE FROM USERS WHERE ID = _ID; 
END;


CALL spInsertUser('Becerra');
CALL spFindAllUser(); 
CALL `spFindUser`(1);
CALL `spUpdateUser`(1, "kewin");
