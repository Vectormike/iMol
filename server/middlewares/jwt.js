import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/jwt';

export const verifyToken = (req, res, next) => {
  try {
    const token = req.header('x-auth-token');

    if (!token) {
      return res.status(401).json({
        message: 'Authorization denied'
      });
    }
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Token is invalid'
    });
  }
};
