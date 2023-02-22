import mysql from 'mysql2';

export const CreateUser = (req, res) => {
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

  let icon = req.body.icon;
  let pwd = req.body.pwd;
  let user = req.body.user;

  let query = 'INSERT INTO `imagesdatabase`.`usuario` (`icon`, `pwd`, `user`)';
  query += ` VALUES ('${icon}', '${pwd}', '${user}');`;

  conexion.query(query, (err, results) => {
    if (err) {
      console.log(err);
      conexion.end();
    } else {
      console.log(results);
      conexion.end();
    }
    res.json({ message: 'Enviado' });
  });
};
