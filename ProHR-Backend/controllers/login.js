const Register = require("../models/register");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Register.findOne({ email });
    if (!user) {
      return res.status(400).json("No user found");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json("Incorrect password");
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

module.exports = loginController;
