// Імпортуємо бібліотеку mongoose для роботи з MongoDB
import mongoose from "mongoose";

// Створюємо асинхронну функцію, яка буде підключати нас до бази даних
const connectDB = async () => {
  try {
    // "miliva-dashboard" — це назва нашої бази даних (вона буде створена автоматично, якщо її не існує)
    await mongoose.connect("mongodb://127.0.0.1:27017/miliva-dashboard");

    // Якщо підключення успішне — виводимо повідомлення в консоль
    console.log("✅ MongoDB підключено успішно!");
  } catch (error) {
    // Якщо сталася помилка — виводимо повідомлення з описом помилки
    console.error("❌ Помилка підключення до MongoDB:", error.message);

    // Завершуємо роботу програми з кодом 1 (1 = помилка)
    process.exit(1);
  }
};

// Експортуємо функцію підключення, щоб використовувати її в інших файлах, наприклад у server.js
export default connectDB;
