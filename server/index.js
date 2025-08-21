// 1. Підключаємо бібліотеки
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// 2. Завантажуємо змінні з .env
dotenv.config();

// 3. Створюємо додаток Express
const app = express();

// 4. Середовища (middleware)
app.use(cors()); // Дозволяє доступ з інших доменів (нашого фронтенду)
app.use(express.json()); // Дозволяє парсити JSON в запитах

// 5. Тестовий маршрут
app.get("/", (req, res) => {
  res.send("Backend is working ✅");
});

// 6. Підключення до MongoDB і запуск сервера
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
