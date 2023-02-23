import jwt from 'jsonwebtoken';

export const VerifyToken = (req, res, next) => {
  console.log(req.body);
  try {
    const token = req.headers.Authorization.split(' ')[1];
    const payload = jwt.verify(token, 'PhayFrase');

    if (Date.now() > payload.exp) {
      res.json({ message: 'Invalid Token Expired' });
    }
  } catch (error) {
    res.json({ message: 'Invalid Token Error' });
  }
  next();
};
