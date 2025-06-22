import express from "express";
import connectDB from "./config/mongoose.js";

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Сервер працює 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Сервер запущено на порту ${PORT}`);
});
