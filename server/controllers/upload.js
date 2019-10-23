import { v2 } from "../config/cloudinary";
import { dataUri } from "../middlewares/multer";

class UploadControllers {
  static async uploadImage(req, res) {
    try {
      if (req.file) {
        const file = dataUri(req).content;
        const result = await v2.uploader.upload(file);
        const image = await result.url;
        return res.status(200).json({
          message: "Your image has been uploaded",
          data: {
            image
          }
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Uncussesful"
      });
    }
  }
}

export default UploadControllers;
