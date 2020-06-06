import { Router } from 'express';
import { validate } from 'express-validation';
import { verifyToken } from '../middlewares/jwt';
import AuthController from '../controllers/auth';
import { register, login } from '../../validations/auth';

const router = Router();

// @route GET api/users
// @desc Get user's details
// @access Private
//router.get('/', verifyToken, getUser);

// @route POST api/users
// @desc Register a user
// @access Private
router.post('/register', validate(register), AuthController.registerUser);

// @route POST api/auth/login
// @desc Auth a user
// @access Private
router.post('/login', validate(login), AuthController.loginUser);

export default router;
