import mysql from 'mysql2';
import jwt from 'jsonwebtoken';
import { host, port, username, password } from './MySql.js';

export const Login = (req, res) => {
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

  let pwd = req.body.pwd;
  let user = req.body.user;

  let query = 'SELECT * FROM `imagesdatabase`.`usuario` where';
  query += '`user` = ' + `'${user}' and ` + '`pwd` = ' + `'${pwd}';`;

  conexion.query(query, (err, results) => {
    if (err) {
      console.log(err);
      conexion.end();
    } else {
      console.log(results);
      conexion.end();
    }
    if (results.length == 0) {
      res.json({ message: false, token: null });
    } else {
      let token = jwt.sign({ user: user, exp: Date.now() + 60 * 10000 }, 'PhayFrase');
      res.json({ token: token, message: true, icon: results[0].icon, id: results[0].IdUser });
    }
  });
};
