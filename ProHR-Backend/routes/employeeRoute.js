const router = require("express").Router();
const {
  getEmployee,
  postEmployee,
} = require("../controllers/exployeeController");

router.get("/", getEmployee);
router.post("/", postEmployee);

module.exports = router;
