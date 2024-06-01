const Employee = require("../models/exployeeModel");

const postEmployee = async (req, res) => {
  const {
    name,
    empid,
    dob,
    email,
    contactno,
    company_email,
    aadharno,
    jobrole,
    dateofjoining,
    education,
    address,
    city,
    state,
    country,
    nationality,
  } = req.body;
  if (
    !name ||
    !contactno ||
    !jobrole ||
    !email ||
    !company_email ||
    !aadharno
  ) {
    return res.json("all fields required");
  }
  const match = await Employee.findOne({ company_email });
  if (match) {
    return res.json("employee alredy exist");
  }
  const employee = await Employee.create({
    name,
    contactno,
    jobrole,
    email,
    company_email,
    aadharno,
  });
  await employee.save();
  res.json(employee);
};

const getEmployee = async (req, res) => {
  const data = await Employee.find({});
  res.json({ data });
};

module.exports = { getEmployee, postEmployee };
