import { Router } from 'express';
const router = Router();

// Middlewares
import UserMiddlewares from '../../middlewares/auth';
const { validateName, validateEmail, validatePassword } = UserMiddlewares;

import auth from '../../middlewares/jwt';

// Controller
import UserControllers from '../../controllers/auth';
const { registerUser, loginUser, getUser } = UserControllers;

// @route GET api/users
// @desc Get user's details
// @access Private
router.get('/', auth, getUser);

// @route POST api/users
// @desc Register a user
// @access Private
router.post(
  '/register',
  validateName,
  validateEmail,
  validatePassword,
  registerUser
);

// @route POST api/auth/login
// @desc Auth a user
// @access Private
router.post('/login', loginUser);

export default router;
