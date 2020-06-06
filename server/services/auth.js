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
      const { name, email, password } = userData;
      const hashPassword = await bcrypt.hash(password, { salt });
      logger.silly(`Saving user data to DB`);
      const userRecord = await new User({
        name,
        email,
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

  async SignIn(userData) {
    const { email, password } = userData;
    try {
      const userRecord = await User.findOne({ email });
      if (!userRecord) {
        throw new Error('User not registered');
      }
      logger.silly(`Verifying Password`);
      const validPassword = await bcrypt.compare(password, userRecord.password);
      if (validPassword) {
        logger.silly(`Password is valid`);
        logger.silly(`Generating JWT`);
        const token = generateToken(userRecord);
        return { userRecord, token };
      } else {
        throw new Error(`Invalid Password`);
      }
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
