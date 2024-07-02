const Attendance = require("../models/attendanceModel");

exports.postAttendance = async (req, res) => {
  const attendanceRecords = req.body;

  if (!Array.isArray(attendanceRecords)) {
    return res.status(400).json("Invalid data format. Expected an array.");
  }

  try {
    const results = [];

    for (const record of attendanceRecords) {
      const { employee_id, date, attendance, sickleave, casualleave } = record;

      // const formattedDate = new Date(date).toISOString().split("T")[0];
      let attendanceRecord = await Attendance.findOne({ employee_id, date });
      if (attendanceRecord) {
        // Update existing record
        attendanceRecord.attendance = attendance;
        attendanceRecord.sickleave = sickleave;
        attendanceRecord.casualleave = casualleave;
        await attendanceRecord.save();
        results.push(attendanceRecord);
      } else {
        // Create a new record
        const newAttendanceRecord = await Attendance.create({
          employee_id,
          date,
          attendance,
          sickleave,
          casualleave,
        });
        results.push(newAttendanceRecord);
      }
    }

    res.status(200).json({
      message: "Attendance recorded successfully",
      results,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error recording attendance",
      error: error.message,
    });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const posts = await Attendance.find().populate("employee_id");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching attendance records",
      error: error.message,
    });
  }
};
