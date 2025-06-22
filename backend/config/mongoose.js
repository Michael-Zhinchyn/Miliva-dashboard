// Імпортуємо mongoose
import mongoose from "mongoose";

// Функція для підключення до локальної MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/miliva-dashboard");

    console.log("✅ MongoDB підключено успішно!");
  } catch (error) {
    console.error("❌ Помилка підключення до MongoDB:", error.message);
    process.exit(1); // Вийти з програми при помилці
  }
};

export default connectDB;
