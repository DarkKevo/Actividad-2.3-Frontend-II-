import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { CreateImage } from './CreateImages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var name;

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../../Frontend/src/Images'),
  filename: (req, file, cb) => {
    name = `${Date.now()}-${file.originalname}`;
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export const upload2 = upload.single('image');

export const uploadFile = (req, res) => {
  var date = new Date();
  const description = req.body.description;
  const time = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} a las ${date.getHours()}:${date.getMinutes()}`;
  const IdUser = req.body.IdUser;
  const img_route = name;
  const categoria = req.body.categoria;
  CreateImage(img_route, time, description, IdUser, categoria);
  res.json({ message: 'Enviado' });
};
