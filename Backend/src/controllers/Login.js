import mysql from 'mysql2';

export const Login = (req, res) => {
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

  let pwd = req.params.pwd;
  let user = req.params.user;

  let query = 'SELECT * FROM `imagesdatabase`.`usuario` where';
  query += '`user` = ' + `'${user}' and ` + '`pwd` = ' + `'${pwd}';` 

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
