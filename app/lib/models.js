import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  img: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  address: {
    type: String,
  },
},
{ timestamps: true }
);

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
    min: 0,
  },
  stock: {
    type: String,
  },
  img: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
},
{ timestamps: true }
);

export const User = mongoose.models.user || mongoose.model("User", userSchema);

export const Product = mongoose.models.product || mongoose.model("Product", productSchema);
