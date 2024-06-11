const router = require("express").Router();
const {
  getSingleEmployee,
  getEmployees,
  postEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/exployeeController");

router.get("/", getEmployees);
router.get("/:id", getSingleEmployee);
router.post("/", postEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
