import Express from 'express';
import { upload2, uploadFile } from '../controllers/images.js';
import { CreateUser } from '../controllers/CreateUser.js';
import { Login } from '../controllers/Login.js';
import { GetImages } from '../controllers/GetImages.js';
import { DeleteImage } from '../controllers/DeleteImage.js';
import { upload3, uploadFile2 } from '../controllers/UploadEditImage.js';

export const routes = Express.Router();

routes.delete('/Delete', DeleteImage, function (req, res) {
  //Recepcion para Eliminar las Imagenes
});

routes.put('/Edit', upload3, uploadFile2, function (req, res) {
  //Recepcion de Imagenes de Edicion
});

routes.get('/Images', GetImages, function (req, res) {
  //Recepcion para las Images
});

routes.get('/Login/send/:user/:pwd', Login, function (req, res) {
  //Recepcion para el Login
});

routes.post('/CreateUser/send', CreateUser, function (req, res) {
  //Recepcion de Usuarios
});

routes.post('/Images/send', upload2, uploadFile, function (req, res) {
  //Recepcion de Imagenes
});
