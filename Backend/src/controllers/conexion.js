import mysql from 'mysql2';

export var verify = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'Darkkevo07',
  multipleStatements: true,
});

verify.connect(function (err) {
  if (err) {
    console.error('Error de conexion: ' + err.stack);
    return;
  }
  console.log('Verificando y Conectando con el identificador ' + verify.threadId);
});

verify.query(`SHOW DATABASES LIKE 'imagesdatabase'`, (err, res) => {
  if (err) {
    console.log(err);
  }
  if (res.length == 0) {
    let sql_query = 'SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;';
    sql_query += 'SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;';
    sql_query +=
      "SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';";
    sql_query += 'CREATE SCHEMA IF NOT EXISTS `imagesdatabase` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci ;';
    sql_query += 'USE `imagesdatabase` ;';
    sql_query +=
      'CREATE TABLE IF NOT EXISTS `imagesdatabase`.`usuario` (`IdUser` INT NOT NULL AUTO_INCREMENT,`icon` VARCHAR(10000) NOT NULL,`pwd` VARCHAR(45) NOT NULL,`user` VARCHAR(500) NOT NULL,PRIMARY KEY (`IdUser`))ENGINE = InnoDB;';
    sql_query +=
      'CREATE TABLE IF NOT EXISTS `imagesdatabase`.`Imagenes` (`Id` INT NOT NULL AUTO_INCREMENT,`img_route` VARCHAR(100) NOT NULL,`time` VARCHAR(100) NOT NULL, `categoria` VARCHAR(100) NOT NULL,`description` VARCHAR(500) NOT NULL,`favorite` JSON,`IdUser` INT NOT NULL,PRIMARY KEY (`Id`, `IdUser`),INDEX `fk_user_idx` (`IdUser` ASC) VISIBLE,CONSTRAINT `fk_user`FOREIGN KEY (`IdUser`)REFERENCES `ImagesDataBase`.`usuario` (`IdUser`)ON DELETE CASCADE ON UPDATE CASCADE)ENGINE = InnoDB;';
    sql_query += 'SET SQL_MODE=@OLD_SQL_MODE;';
    sql_query += 'SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;';
    sql_query += 'SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;';
    verify.query(sql_query, function (err, res) {
      if (err) {
        console.log(err);
      }
      console.log('Base de Datos Creada, Verificada y Desplegada correctamente :D');
      verify.end();
    });
  }
});
