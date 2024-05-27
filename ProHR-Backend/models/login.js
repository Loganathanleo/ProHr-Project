// backend/models/employeeModel.js
const mongoose = require('mongoose');

const loginschema = new mongoose.Schema({
 // empId: { type: Number, unique: true, default: () => Math.floor(Math.random() * 1000000) },
  email: { type: String, required: true },
 
  password: { type: String, required: true }
});

module.exports = mongoose.model('Login', loginschema);
