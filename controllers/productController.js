const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

// get all product
const getProducts = asyncHandler(async (req, res) => {
  try {
    const { category, title, isAdult, genre, minPrice, maxPrice } = req.query;
    console.log(">>>");
    console.log("category " + category);
    console.log("title " + title);
    console.log("isAdult " + isAdult);
    console.log("genre " + genre);
    console.log("minPrice " + minPrice);
    console.log("maxPrice " + maxPrice);
    console.log("<<<");

    let query = {};

    if (category) {
      query.category = category;
    }
    if (isAdult === "true") {
      query.isAdult = isAdult;
    }

    if (title) {
      query.title = { $regex: title, $options: "i" };
    }

    if (genre) {
      const genresArray = genre.split(",").map((genre) => genre.trim());
      query.genre = { $in: genresArray };
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
      query.price = { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) };
    } else if (minPrice !== undefined) {
      query.price = { $gte: parseInt(minPrice) };
    } else if (maxPrice !== undefined) {
      query.price = { $lte: parseInt(maxPrice) };
    }

    const products = await Product.find(query);
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// get a single product
const getProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// create a product
const createProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// update a product
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    // we cannot find any product in database
    if (!product) {
      res.status(404);
      throw new Error(`cannot find any product with ID ${id}`);
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404);
      throw new Error(`cannot find any product with ID ${id}`);
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
