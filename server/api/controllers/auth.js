import AuthService from '../../services/auth';
import logger from '../loaders/logger';

const AuthController = {
  /**
   * Signup user
   * @constructor
   * @param {*} req - get request.
   * @param {*} res -get response
   */

  async registerUser(req, res) {
    const userData = req.body;
    try {
      const { userRecord, token } = AuthService.SignUp(userData);
      return res.status(201).json({ userRecord, token });
    } catch (error) {
      logger.error(`🔥 error: %o, ${error}`);
    }
  },

  /**
   * Login user
   * @constructor
   * @param {*} req - get request.
   * @param {*} res -get response
   */
  async loginUser(req, res) {
    const userData = req.body;
    try {
      const { userRecord, token } = AuthService.SignIn(userData);
      return res.status(200).json({ userRecord, token });
    } catch (error) {
      logger.error(`🔥 error: %o, ${error}`);
    }
  },
};

export default AuthController;
