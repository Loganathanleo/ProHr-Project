const Register = require("../models/register");

const registerController = async (req, res) => {
  const { name, dob, email, role, password, contactno } = req.body;
  try {
    const user = new Register({
      name,
      dob,
      email,
      role,
      password,
      contactno,
    });
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

module.exports = registerController;
