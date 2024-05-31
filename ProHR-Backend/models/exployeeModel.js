const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  empid: {
    type: Number,
  },
  dob: {
    type: Date,
  },
  email: {
    type: String,
  },
  contactno: {
    type: Number,
  },
  company_email: {
    type: String,
  },
  aadharno: {
    type: Number,
  },
  jobrole: {
    type: String,
  },
  dateofjoining: {
    type: Number,
  },
  education: {
    type: Number,
  },
  address: {
    type: Number,
  },
  city: {
    type: Number,
  },
  state: {
    type: Number,
  },
  country: {
    type: Number,
  },
  nationality: {
    type: Number,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
