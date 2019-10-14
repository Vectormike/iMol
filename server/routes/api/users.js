import { Router } from "express";
const router = Router();

// Controller
import UserControllers from "../../controllers/user";

const { registerUser } = UserControllers;

router.post("/", registerUser);


export default router;