import { Router } from "express";
const router = Router();

// Middleware
import { upload } from "../../middlewares/multer";

// Controller
import UploadController from "../../controllers/upload";
const { uploadImage } = UploadController;

// @route POST api/uploads/photo
// @desc Upload a pgoto
// @access Public
router.post("/", upload, uploadImage);

export default router;
