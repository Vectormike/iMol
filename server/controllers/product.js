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

  static async getProduct(req, res) {
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
  }

  static async editProduct(req, res) {
    try {
      const { name, price } = req.body;
      const update = {
        name,
        price
      };
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, update, {
        useFindAndModify: false
      });

      const editedProduct = await product.save();
      if (editedProduct) {
        res.status(201).json({
          message: "Product is updated",
          editedProduct
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "Couldn't edit this product...",
        error: error.message
      });
    }
  }

  static async deleteProduct(req, res) {
    const { id } = req.params;
    try {
      const deleteProduct = await Product.findById(id);
      const deletedProduct = await Product.remove(deleteProduct);
      if (deletedProduct) {
        res.status(201).json({
          message: "Product deleted..."
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Couldn't delete this product",
        error: error.message
      });
    }
  }
}

export default ProductControllers;
