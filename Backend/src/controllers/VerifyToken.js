import jwt from 'jsonwebtoken';

export const VerifyToken = (req, res, next) => {
  console.log(req.body);
  try {
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, 'PhayFrase');
    console.log('el payload es');
    console.log(payload);

    if (Date.now() > payload.exp) {
      res.json({ message: false });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.json({ message: false });
  }
};
