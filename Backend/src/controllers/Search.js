import mysql from 'mysql2';
import { host, port, username, password } from './MySql.js';

export const Search = (req, res) => {
  var conexion = mysql.createConnection({
    host: host,
    port: port,
    user: username,
    password: password,
    database: 'imagesdatabase',
    multipleStatements: true,
  });

  let categoria = req.body.categoria;
  let autor = req.body.autor;

  conexion.connect(function (err) {
    if (err) {
      console.error('Error de conexion: ' + err.stack);
      return;
    }
    console.log('Bienvenido, Realizando Query... ' + conexion.threadId);
  });

  let query = 'SELECT * from `imagesdatabase`.`imagenes`;'; //todo
  let query2 = 'SELECT * from `imagesdatabase`.`imagenes` where `user`= ' + `'${autor}'`; //por autor
  let query3 = 'SELECT * from `imagesdatabase`.`imagenes` where `categoria` = ' + `'${categoria}'`; //por categoria
  let query4 = 'SELECT * from `imagesdatabase`.`imagenes` where `categoria` = ' + `'${categoria}'` + 'and `user`= ' + `'${autor}'`; //por autor y categoria

  if (categoria == 'All' && autor === '') {
    //POR TODO
    conexion.query(query, (err, results) => {
      if (err) {
        console.log(err);
        conexion.end();
      } else {
        conexion.end();
      }
      res.json(results);
    });
  }

  if (categoria != 'All' && autor === '') {
    //POR CATEGORIA
    conexion.query(query3, (err, results) => {
      if (err) {
        console.log(err);
        conexion.end();
      } else {
        conexion.end();
      }
      res.json(results);
    });
  }

  if (categoria == 'All' && autor !== '') {
    //POR AUTOR
    conexion.query(query2, (err, results) => {
      if (err) {
        console.log(err);
        conexion.end();
      } else {
        conexion.end();
      }
      res.json(results);
    });
  }

  if (categoria != 'All' && autor !== '') {
    //POR AUTOR Y CATEGORIA
    conexion.query(query4, (err, results) => {
      if (err) {
        console.log(err);
        conexion.end();
      } else {
        conexion.end();
      }
      res.json(results);
    });
  }
};
