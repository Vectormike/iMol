import User from '../models/User';
import logger from '../loaders/logger';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';
import config from '../config/vars';

const CreateAccountService = {
  /**
   * Create account
   *
   */

  async SignUp(userData) {
    try {
      const salt = randomBytes(32);
      logger.silly(`Hashing password`);
      const hashPassword = await bcrypt.hash(userData.password, { salt });
      logger.silly(`Saving user data to DB`);
      const userRecord = await new User({
        ...userData,
        hashPassword,
      });
      logger.silly(`Generating JWT`);
      const token = generateToken(userRecord);

      if (!userRecord) {
        throw new Error(`User cannot be created`);
      }

      return { token, userRecord };
    } catch (error) {
      logger.error(error);
    }
  },

  async SignIn() {
    try {
    } catch (error) {
      logger.error(error);
    }
  },
};

const generateToken = (user) => {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  logger.silly(`Signing JWT for user: ${user.name}`);

  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      exp: exp.getTime() / 1000,
    },
    config.jwtSecret
  );
};

export default CreateAccountService;
