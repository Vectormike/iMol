import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create Schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

export const Product = mongoose.model("Product", productSchema);
