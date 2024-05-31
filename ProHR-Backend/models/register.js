const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: { type: String },
  dob: { type: Date },
  email: { type: String },
  role: { type: String },
  password: { type: String },
  contactno: { type: Number },
});

module.exports = mongoose.model("Register", registerSchema);
