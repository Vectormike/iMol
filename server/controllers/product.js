import { Product } from "../models/Product";

export const getProduct = async (req, res, next) => {
  const { params } = req;
  try {
    const product = await Product.findById(params);
    if (product) {
      res.status(201).json(product);
    }
    res.status(404).json({
      message: "Couldn't find that product"
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
  next();
};

export const editProduct = async (req, res) => {
  if (req.body.name) {
    res.product.name = req.body.name;
  }
  if (req.body.price) {
    res.product.price = req.body.price;
  }
  try {
    const editedProduct = await res.product.save();
    if (editedProduct) {
      res.status(201).json(editedProduct);
    }
    res.status(400).json({
      message: "Couldn't edit product..."
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};
