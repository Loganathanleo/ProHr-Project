const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  contactno: { type: Number, required: true },
});

module.exports = mongoose.model("Register", registerSchema);
