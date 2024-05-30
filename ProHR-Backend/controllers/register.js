const Register = require("../models/register");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
  const { name, dob, email, role, password, contactno } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    if (!name || !dob || !email || !role || !password || !contactno) {
      return res.status(400).json("all fields are required");
    }
    if (password.length < 6) {
      return res.status(400).json("password must be atleast 6 characters long");
    }
    const userExists = await Register.findOne({ email });
    if (userExists) {
      return res.status(400).json("user already exists");
    }
    const user = await Register.create({
      name,
      dob,
      email,
      role,
      password: hashedPassword,
      contactno,
    });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

module.exports = registerController;
