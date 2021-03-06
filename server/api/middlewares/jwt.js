import jwt from 'jsonwebtoken';
import config from '../../config/vars';

export const verifyToken = (req, res, next) => {
  try {
    const token = req.header('x-auth-token');

    if (!token) {
      return res.status(401).json({
        message: 'Authorization denied',
      });
    }
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Token is invalid',
    });
  }
};
