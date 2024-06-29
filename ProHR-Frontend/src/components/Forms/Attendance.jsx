import React, { useState } from "react";
import { Form, FormLabel, Button } from "react-bootstrap";
import axios from "axios";

function Attendance() {
  const [absent, setAbsent] = useState(false);
  const [leaveType, setLeaveType] = useState("");
  const [remark, setRemark] = useState("");
  const [attendance, setAttendance] = useState("Present");
  // const { item } = location.state || {};

  const handleAttendanceChange = (event) => {
    setAttendance(event.target.value);
    setAbsent(event.target.value === "Absent");
  };

  const handleLeaveTypeChange = (event) => {
    setLeaveType(event.target.value);
  };

  const handleRemarkChange = (event) => {
    setRemark(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      attendance,
      leaveType: absent ? leaveType : null,
      remark: absent ? remark : null,
    };

    try {
      const response = await axios.post("", formData);
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div>
          <FormLabel htmlFor="Attendance">Attendance:</FormLabel>
          <input
            type="radio"
            id="attendancePresent"
            name="attendance"
            value="Present"
            checked={attendance === "Present"}
            onChange={handleAttendanceChange}
          />
          Present
          <input
            type="radio"
            id="attendanceAbsent"
            name="attendance"
            value="Absent"
            checked={attendance === "Absent"}
            onChange={handleAttendanceChange}
          />
          Absent
        </div>
        {absent && (
          <div>
            <div>
              <FormLabel htmlFor="leave">Leave Type:</FormLabel>
              <input
                type="radio"
                id="leaveSick"
                name="leave"
                value="Sick Leave"
                checked={leaveType === "Sick Leave"}
                onChange={handleLeaveTypeChange}
              />
              Sick Leave
              <input
                type="radio"
                id="leaveCasual"
                name="leave"
                value="Casual Leave"
                checked={leaveType === "Casual Leave"}
                onChange={handleLeaveTypeChange}
              />
              Casual Leave
            </div>
            <div>
              <FormLabel htmlFor="remark">Remark:</FormLabel>
              <input
                type="textbox"
                id="remark"
                value={remark}
                onChange={handleRemarkChange}
              />
            </div>
          </div>
        )}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Attendance;
