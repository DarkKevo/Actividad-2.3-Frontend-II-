import Express from 'express';
import cors from 'cors';
import { routes } from './routes/routes.js';
import bodyParser from 'body-parser';
import { verify } from './controllers/conexion.js';

const app = Express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//TODO: Settings
let port = 3000;

app.use('/', routes);

app.set('port', process.env.PORT || port);
app.listen(app.get('port'), () => {
  console.log(`Running on port ${port}`);
});
