import mysql from 'mysql2';

export function CreateImage(img_route, time, description, favorite, IdUser, categoria) {
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

  let query = 'INSERT INTO `imagesdatabase`.`imagenes` (`img_route`, `time`, `description`, `favorite`, `IdUser`, `categoria`)';
  query += ` VALUES ('${img_route}', '${time}', '${description}', '${favorite}', '${IdUser}', '${categoria}');`;

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
