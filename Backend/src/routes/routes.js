import Express from 'express';
import { upload2, uploadFile } from '../controllers/images.js';
import { CreateUser } from '../controllers/CreateUser.js';
import { Login } from '../controllers/Login.js';
import { GetImages } from '../controllers/GetImages.js';
import { DeleteImage } from '../controllers/DeleteImage.js';
import { upload3, uploadFile2 } from '../controllers/UploadEditImage.js';
import { FavoriteImage } from '../controllers/findFavorite.js';
import { VerifyToken } from '../controllers/VerifyToken.js';
import { Search } from '../controllers/Search.js';
import { Favorite } from '../controllers/favorite.js';
import { Perfil } from '../controllers/Perfil.js';

export const routes = Express.Router();

routes.post('/Favorite', FavoriteImage, function (req, res) {
  //Recepcion de Favoritos
});

routes.delete('/Delete/:Id', VerifyToken, DeleteImage, function (req, res) {
  //Recepcion para Eliminar las Imagenes
});

routes.put('/Edit', VerifyToken, upload3, uploadFile2, function (req, res) {
  //Recepcion de Imagenes de Edicion
});

routes.get('/Images', GetImages, function (req, res) {
  //Recepcion para las Images
});

routes.get('/Favoritos', Favorite, function (req, res) {
  //Recepcion para las Images
});

routes.post('/Perfil', Perfil, function (req, res) {
  //Recepcion para las Images
});

routes.post('/Login/send', Login, function (req, res) {
  //Recepcion para el Login
});

routes.post('/CreateUser/send', CreateUser, function (req, res) {
  //Recepcion de Usuarios
});

routes.post('/Images/send', VerifyToken, upload2, uploadFile, function (req, res) {
  //Recepcion de Imagenes
});

routes.post('/Images/search', Search, function (req, res) {
  //Recepcion para las Images
});
