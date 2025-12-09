import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'токена нема' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'токена нема' });

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data; 
    next();
  } catch (err) {
    return res.status(401).json({ message: 'недайсний токен' });
  }
}