const Register = require("../models/register");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    if (match) {
      jwt.sign(
        { id: user._id, name: user.name, email: user.email },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "3m" },
        (err, token) => {
          if (err) throw err.message;
          res.json(token);
        }
      );
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
};

module.exports = loginController;
