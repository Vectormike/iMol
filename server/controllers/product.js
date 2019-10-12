import { Product } from "../models/Product";

class ProductControllers {
  static async getAllProducts(req, res) {
    try {
      const products = await Product.find();
      if (products) {
        res.status(201).json({
          message: "Viewed all products...",
          products
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Couldn't get products...",
        error: error.message
      });
    }
  }

  static async addProduct(req, res) {
    try {
      const { name, price } = req.body;
      const product = new Product({
        name,
        price
      });
      const newProduct = await product.save();

      res.status(201).json({
        message: "Product created...",
        newProduct
      });
    } catch (error) {
      res.status(500).json({
        message: "Couldn't add product...",
        error: error.message
      });
    }
  }

  static async getProduct(req, res, next) {
    const { id } = req.params;
    try {
      const foundProduct = await Product.findById(id);
      if (foundProduct) {
        res.status(201).json({
          message: "Product found",
          foundProduct
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Couldn't find that product",
        error: error.message
      });
    }
    next();
  }

  static async editProduct(req, res) {
    try {
      if (req.body.name) {
        res.product.name = req.body.name;
      }
      if (req.body.price) {
        res.product.price = req.body.price;
      }
      const editedProduct = await res.product.save();
      if (editedProduct) {
        res.status(201).json(editedProduct);
      }
    } catch (error) {
      res.status(400).json({
        message: "Couldn't edit this product...",
        error: error.message
      });
    }
  }

  static async deleteProduct(req, res) {
    try {
      const deletedProduct = await res.product.remove();
      if (deletedProduct) {
        res.json.status(201).json({
          message: "Product deleted..."
        });
      }
      res.json({
        message: "Couldn't delete this product"
      });
    } catch (error) {
      res.status.json({
        message: error.message
      });
    }
  }
}

export default ProductControllers;
