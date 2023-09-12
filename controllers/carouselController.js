const GameSlide = require("../models/carouselModel");
const asyncHandler = require("express-async-handler");

const getSlides = asyncHandler(async (req, res) => {
  try {
    const { category } = req.query; // Получаем параметр "category" из запроса
    let query = {}; // Пустой объект запроса

    if (category) {
      query = { category: category }; // Если задана категория, добавляем фильтр по категории
    }

    const products = await GameSlide.find(query); // Ищем товары с учетом фильтра

    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
module.exports = {
  getSlides,
};
