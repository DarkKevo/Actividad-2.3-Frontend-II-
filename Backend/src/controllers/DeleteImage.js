import fs from 'fs';
import mysql from 'mysql2';
import path from 'path';
import { host, port, username, password } from './MySql.js';

export const DeleteImage = (req, res) => {
  var conexion = mysql.createConnection({
    host: host,
    port: port,
    user: username,
    password: password,
    database: 'imagesdatabase',
    multipleStatements: true,
  });

  conexion.connect(function (err) {
    if (err) {
      console.error('Error de conexion: ' + err.stack);
      return;
    }
    console.log('Bienvenido, Realizando Query... ' + conexion.threadId);
  });

  let Id = req.body.Id;

  let query = 'SELECT * from `imagesdatabase`.`imagenes` where `Id` = ' + `${Id}`;

  let query2 = 'DELETE from `imagesdatabase`.`imagenes` where `Id` = ' + `${Id}`;

  conexion.query(query, (err, results) => {
    if (err) {
      console.log(err);
      conexion.end();
    } else {
      console.log(results);
    }
    try {
      fs.unlinkSync(path.join(`src/Images/${results[0].img_route}`));
      console.log('Archivo Eliminado');
    } catch (err) {
      console.error('Algo Salio Mal', err);
    }
  });

  conexion.query(query2, (err, results) => {
    if (err) {
      console.log(err);
      conexion.end();
    } else {
      console.log(results);
    }
    conexion.end();
  });
};
