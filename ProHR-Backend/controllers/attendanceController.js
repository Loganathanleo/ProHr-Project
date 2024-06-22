const Attendance = require("../models/attendanceModel");

exports.postAttendance = async (req, res) => {
  const { employee_id, date, attendance, sickleave, casualleave } = req.body;
  try {
    // Check if an attendance record exists for this employee on the given date
    let attendanceRecord = await Attendance.findOne({ employee_id, date });
    if (attendanceRecord) {
      // Update existing record
      attendanceRecord.attendance = attendance;
      attendanceRecord.sickleave = sickleave;
      attendanceRecord.casualleave = casualleave;
    } else {
      // Create a new record
      attendanceRecord = new Attendance({
        employee_id,
        date,
        attendance,
        sickleave,
        casualleave,
      });
    }
    await attendanceRecord.save();
    res.json({ message: "Attendance recorded successfully", attendanceRecord });
  } catch (error) {
    res.json({ message: "Error recording attendance", error: error.message });
  }
};

exports.getAttendance = async (req, res) => {
  const posts = await Attendance.find().populate("employee_id");
  try {
    res.json(posts);
  } catch (error) {
    res.json(error);
  }
};
