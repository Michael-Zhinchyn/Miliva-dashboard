// controllers/driverController.js

import Driver from "../models/driver.js";

// Функція для створення нового водія
export const createDriver = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      licence,
      cdl,
      username,
      password,
      role,
      documents,
    } = req.body;

    // Створюємо нового водія
    const newDriver = new Driver({
      firstName,
      lastName,
      phoneNumber,
      licence,
      cdl,
      username,
      password,
      role,
      documents,
    });

    // Зберігаємо у БД
    await newDriver.save();

    res
      .status(201)
      .json({ message: "Driver created successfully", driver: newDriver });
  } catch (error) {
    console.error("❌ Error creating driver:", error.message);
    res.status(500).json({ message: "Server error while creating driver" });
  }
};
