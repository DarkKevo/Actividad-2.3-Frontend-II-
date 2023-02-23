import mysql from 'mysql2';
import { host, port, username, password } from './MySql.js';

export const GetImages = (req, res) => {
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

  let query = 'SELECT * from `imagesdatabase`.`imagenes` inner join `imagesdatabase`.`usuario`;';

  conexion.query(query, (err, results) => {
    if (err) {
      console.log(err);
      conexion.end();
    } else {
      console.log(results);
      conexion.end();
    }
    res.json(results);
  });
};
