const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employee_id: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  date: {
    type: Date,
    default: Date.now,
  },
  attendance: {
    type: String,
  },
  sickleave: {
    type: Boolean,
  },
  casualleave: {
    type: Boolean,
  },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;
