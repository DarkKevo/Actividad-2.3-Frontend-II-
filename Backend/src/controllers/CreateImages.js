import mysql from 'mysql2';
import { host, port, username, password } from './MySql.js';

export function CreateImage(img_route, time, description, IdUser, categoria, user) {
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

  let query = 'INSERT INTO `imagesdatabase`.`imagenes` (`img_route`, `time`, `description`, `IdUser`, `categoria`, `user`)';
  query += ` VALUES ('${img_route}', '${time}', '${description}', '${IdUser}', '${categoria}', '${user}');`;

  conexion.query(query, (err, results) => {
    if (err) {
      console.log(err);
      conexion.end();
      return false;
    } else {
      console.log(results);
      conexion.end();
      return true;
    }
  });
}
