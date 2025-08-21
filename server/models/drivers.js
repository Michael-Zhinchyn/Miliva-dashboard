// server/models/Driver.js
import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  licence: {
    type: String,
    required: true,
  },
  cdl: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "driver",
  },
  documents: {
    type: [String], // список назв файлів або посилань
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Driver = mongoose.model("Driver", driverSchema);
export default Driver;
