const router = require("express").Router();
const attendanceController = require("../controllers/attendanceController");

router.post("/", attendanceController.postAttendance);
router.get("/", attendanceController.getAttendance);

module.exports = router;
