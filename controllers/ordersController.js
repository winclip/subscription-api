// orderController.js
const asyncHandler = require("express-async-handler");
const Order = require("../models/orderSchema");

// Генерация номера заказа
function generateOrderNumber() {
  // Ваша логика для генерации номера заказа
  // Например, создаем номер на основе текущей даты и случайных чисел

  const today = new Date();
  const year = String(today.getFullYear()).slice(-2); // Две последние цифры года
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Месяц с ведущим нулем, если меньше 10
  const day = String(today.getDate()).padStart(2, "0"); // День с ведущим нулем, если меньше 10

  // Генерируем 4 случайных числа для номера заказа
  const randomDigits = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 10)
  ).join("");

  // Создаем номер заказа в формате "гг-мм-дд-случайные_цифры"
  const orderNumber = `${year}${month}${day}-${randomDigits}`;

  return orderNumber;
}

const addOrder = asyncHandler(async (req, res) => {
  try {
    // Генерируем номер заказа
    const orderNumber = generateOrderNumber();

    // Создаем заказ в базе данных с номером заказа
    const order = new Order({ ...req.body, orderNumber });

    // Сохраняем заказ
    const createdOrder = await order.save();

    // Отправляем номер заказа в ответе
    res.status(200).json({ orderNumber: createdOrder.orderNumber });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { addOrder };
