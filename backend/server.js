// Імпортуємо бібліотеку express для створення сервера
import express from "express";

// Імпортуємо функцію підключення до MongoDB (з config/mongoose.js)
import connectDB from "./config/mongoose.js";

// Створюємо основний об'єкт нашого сервера
const app = express();

// Викликаємо функцію підключення до MongoDB
connectDB();

// Цей middleware дозволяє Express розпізнавати JSON у запитах
app.use(express.json());

// Створюємо маршрут GET "/" — відповідь при відкритті головної сторінки
app.get("/", (req, res) => {
  res.send("Сервер працює 🚀"); // Відповідь текстом
});

// Встановлюємо порт: з середовища або за замовчуванням 5000
const PORT = process.env.PORT || 5000;

// Запускаємо сервер і виводимо повідомлення в консоль
app.listen(PORT, () => {
  console.log(`✅ Сервер запущено на порту ${PORT}`);
});
