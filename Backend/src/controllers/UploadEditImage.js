import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { EditImage } from '../controllers/EditImage.js';
var name;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../Images'),
  filename: (req, file, cb) => {
    name = `${Date.now()}-${file.originalname}`;
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export const upload3 = upload.single('image');

export const uploadFile2 = (req, res) => {
  var date = new Date();
  const id = req.body.id;
  const categoria = req.body.categoria;
  const description = req.body.description;
  const time = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} a las ${date.getHours()}:${date.getMinutes()}`;
  const img_route = name;
  EditImage(id, description, time, img_route, categoria);
  res.json({ message: 'Enviado' });
};
