import { Router } from "express";
const router = Router();

import { Product } from "../../models/Product";

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
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({
      message: "Couldn't add product...",
      error: error.message
    });
  }
});

export default router;
