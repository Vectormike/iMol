import { Router } from "express";
const router = Router();

// Middlewares
import UserMiddlewares from "../../middlewares/auth";
const { validatePassword } = UserMiddlewares;

// Controller
import UserControllers from "../../controllers/auth";
const { registerUser, loginUser } = UserControllers;

// @route POST api/users
// @desc Register a user
// @access Public
router.post("/register", validatePassword, registerUser);

// @route POST api/auth/login
// @desc Auth a user
// @access Public
router.post("/login", loginUser);

export default router;
