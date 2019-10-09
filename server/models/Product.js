import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create Schema
const productSchema = new Schema({
  name: String,
  price: Number,
  updatedAt: { type: Date, default: Date.now() }
});

export const Product = mongoose.model("Product", productSchema);
