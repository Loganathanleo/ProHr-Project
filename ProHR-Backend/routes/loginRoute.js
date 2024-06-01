const router = require("express").Router();
const loginController = require("../controllers/login");

router.post("/", loginController);

module.exports = router;
