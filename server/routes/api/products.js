import { Router } from "express";
const router = Router();

// Controllers
import ProductControllers from "../../controllers/product";

const {
  getAllProducts,
  addProduct,
  getProduct,
  editProduct,
  deleteProduct
} = ProductControllers;

// Routes

// @route GET api/products
// @desc Get all products
// @access Public
router.get("/", getAllProducts);

// @route POST api/products
// @desc Add a product
// @access Public
router.post("/", addProduct);

// @route GET api/products/:id
// @desc Search/Get a product
// @access Public
router.get("/:id", getProduct);

// @route PATCH api/products
// @desc Edit a product
// @access Public
router.patch("/:id", editProduct);

// @route DELETE api/product/:id
// @desc Delete a product
// @access Public
router.delete("/:id", deleteProduct);

export default router;
