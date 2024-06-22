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
    type: Date,
  },
  education: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  nationality: {
    type: String,
  },
  // attendace: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attendace" }],
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
