import { Router } from "express";
const router = Router();
import Product from "../../models/Product";

// @route GET api/products
// @desc Get all products
// @access Public
router.get("/", async (req, res) => {
  res.status(200).json({ message: "Works" });
});

export default router;
