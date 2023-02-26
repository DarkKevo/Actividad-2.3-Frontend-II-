import mysql from 'mysql2';
import { host, port, username, password } from './MySql.js';

export const FavoriteImage = (req, res) => {
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
  let user = req.body.user;

  let query = 'SELECT * from `imagesdatabase`.`imagenes` where `Id` = ' + `'${Id}'`;
  console.log(query);

  var query2;
  var query3;
  var query4;

  conexion.query(query, (err, results) => {
    if (err) {
      console.log(err);
      conexion.end();
    } else {
      console.log(results);
      let data = results[0].favorite;
      if (data === null) {
        let array = [];
        array.push(user);
        query4 = 'UPDATE `imagesdatabase`.`imagenes` set `favorite`= ' + `'${JSON.stringify(array)}'` + ' where `Id`= ' + `'${Id}'`;
        conexion.query(query4, (err, results) => {
          if (err) {
            console.log(err);
          }
        });
      } else {
        if (results[0].favorite.includes(user)) {
          data.forEach((i, index) => {
            if (i == user) {
              data.splice(index, 1);
              query2 = 'UPDATE `imagesdatabase`.`imagenes` set `favorite`= ' + `'${JSON.stringify(data)}'` + ' where `Id`= ' + `'${Id}'`;
              conexion.query(query2, (err, results) => {
                if (err) {
                  console.log(err);
                }
              });
            }
          });
        } else {
          data.push(user);
          query3 = 'UPDATE `imagesdatabase`.`imagenes` set `favorite`= ' + `'${JSON.stringify(data)}'` + ' where `Id`= ' + `'${Id}'`;
          conexion.query(query3, (err, results) => {
            if (err) {
              console.log(err);
            }
          });
        }
      }
    }
  });

  res.json({ message: 'enviado' });
};
