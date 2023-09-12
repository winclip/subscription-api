const express = require("express");

const { addOrder } = require("../controllers/ordersController");

const router = express.Router();

router.post("/addOrder", addOrder);

module.exports = router;
