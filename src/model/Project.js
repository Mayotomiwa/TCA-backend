// models/User.js

const mongoose = require("mongoose");
const Joi = require("joi");

// Define the schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
 
  description: {
    type: String,
    required: true,
  },




  size: {
    type: [String],
    required: true,
  },

  is_discount: {
    type: Boolean,
    default: false,
    required: false,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },

  in_stock: {
    type: Boolean,
    default: true,
    required: false,
  },

  discout_price: {
    type: Number,
    default: 0,
    required: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//CRUD
///CREATE,READ,UPDATE AND DELETE

// Create the model

const productValidatorSchema = Joi.object({
  title: Joi.string().required(),
  brand: Joi.string().required(),
  category: Joi.string().required(),
  quantity: Joi.number().min(1).required(),
  color: Joi.array().items(Joi.string()).required(),

  description: Joi.string().min(10).required(),
  price: Joi.number().required(),
  discout_price: Joi.number(),
  is_discount: Joi.boolean(),
  size: Joi.array().items(Joi.string()).required(),
});

const Product = mongoose.model("Product", productSchema);
module.exports.Product = Product;
module.exports.productValidatorSchema = productValidatorSchema;
