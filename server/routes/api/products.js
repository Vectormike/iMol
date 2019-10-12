import { Router } from "express";
const router = Router();

// Controllers
import {
  getProduct,
  editProduct,
  deleteProduct
} from "../../controllers/product";

// Model
import { Product } from "../../models/Product";

// Routes

// @route GET api/products
// @desc Get all products
// @access Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "No Products created yet..."
    });
  }
});

// @route POST api/products
// @desc Add a product
// @access Public
router.post("/", async (req, res) => {
  const { name, price } = req.body;
  const product = new Product({
    name,
    price
  });
  try {
    const newProduct = await product.save();
    if (newProduct) {
      res.status(201).json(newProduct);
    }
    res.status(401).json({
      message: "Couldn't add product..."
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

// @route GET api/products/:id
// @desc Search/Get a product
// @access Public
router.get("/:id", getProduct);

// @route PATCH api/products
// @desc Edit a product
// @access Public
router.patch("/:id", getProduct, editProduct);

// @route DELETE api/product/:id
// @desc Delete a product
// @access Public
router.delete("/:id", getProduct, deleteProduct);

export default router;
