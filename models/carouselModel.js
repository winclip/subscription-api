const mongoose = require("mongoose");

const additionalSlideSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imgLink: { type: String, required: true },
  isDiscount: { type: Boolean, required: true },
  discount: { type: Number, required: true },
  price: { type: Number, required: true },
});

const gameSlideSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imgLink: { type: String, required: true },
  isDiscount: { type: Boolean, required: true },
  discount: { type: Number, required: true },
  price: { type: Number, required: true },
  additionalSlides: [additionalSlideSchema],
});

const GameSlide = mongoose.model("GameSlide", gameSlideSchema, "MainCarousel");

module.exports = GameSlide;
