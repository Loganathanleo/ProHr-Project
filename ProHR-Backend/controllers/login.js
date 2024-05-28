const Register = require("../models/register");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Register.findOne({ email, password });
    if (!user) {
      return res.status(400).json("Invalid Credentials");
    }
    res.json(user);
    console.log("loginController successful");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

module.exports = loginController;
