import fs from 'fs';
import mysql from 'mysql2';
import path from 'path';

export const EditImage = (id, description, time, img_route, categoria) => {
  var conexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Darkkevo07',
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

  let query = 'SELECT * from `imagesdatabase`.`imagenes` where `Id` = ' + `${id}`;

  let query2 =
    'UPDATE `imagesdatabase`.`imagenes` set `img_route`= ' +
    `'${img_route}'` +
    ', `time`= ' +
    `'${time}'` +
    ', `description`= ' +
    `'${description}'` +
    ', `categoria`= ' +
    `'${categoria}'` +
    ' where `Id` =' +
    `'${id}'`;

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
