import multer from "multer";
import Datauri from "datauri";
import path from "path";

const dUri = new Datauri();

// Storage
const storage = multer.memoryStorage();
const upload = multer({ storage }).single("photo");
const dataUri = req =>
  dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

export { upload, dataUri };
