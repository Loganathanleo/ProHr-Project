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

  try {
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
  } catch (error) {
    res.json(error);
  }
};

const getEmployees = async (req, res) => {
  try {
    const data = await Employee.find({});
    res.json({ data });
  } catch (error) {
    res.json(error);
  }
};

const getSingleEmployee = async (req, res) => {
  const emp_id = req.params.id;
  try {
    const employee = await Employee.findById(emp_id);
    if (!employee) return res.json("employee not found");
    res.json(employee);
  } catch (error) {
    res.json(error);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!employee) {
      return res.json("employee not found");
    }
    res.json({ updated: employee });
  } catch (error) {
    res.json(error);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.json("employee not found");
    }
    res.json("employee deleted");
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getSingleEmployee,
  getEmployees,
  postEmployee,
  updateEmployee,
  deleteEmployee,
};
