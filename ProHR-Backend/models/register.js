// backend/models/employeeModel.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
 // empId: { type: Number, unique: true, default: () => Math.floor(Math.random() * 1000000) },
  dob: { type: Date, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  contactno: {type:Number, required:true}
});

module.exports = mongoose.model('Employee', employeeSchema);
