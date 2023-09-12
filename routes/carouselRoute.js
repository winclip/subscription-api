const express = require("express");

const { getSlides } = require("../controllers/carouselController");

const router = express.Router();

router.get("/carousel", getSlides);

module.exports = router;
