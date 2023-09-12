const express = require("express");
const Product = require("../models/productModel");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { getSlides } = require("../controllers/carouselController");

const router = express.Router();

router.get("/", getProducts);
router.get("/carousel", getSlides);

router.get("/:id", getProduct);

router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product

router.delete("/:id", deleteProduct);

module.exports = router;
