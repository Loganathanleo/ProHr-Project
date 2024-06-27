import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

function Attendance() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/employee").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const [formData, setFormData] = useState([]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFormData = [...formData];
    if (!updatedFormData[index]) {
      updatedFormData[index] = {};
    }
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    axios.post("http://127.0.0.1:5000/api/attendance", formData).then((res) => {
      console.log("Data submitted successfully:", res.data);
    }).catch((err) => {
      console.error("Error submitting data:", err);
    });
  };

  return (
    <div>
      <Table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Emp Name</th>
            <th>Attendance</th>
            <th>Sick Leave</th>
            <th>Casual Leave</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee, index) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>
                <input
                  type="radio"
                  name={`attendance-${index}`}
                  value="Present"
                  onChange={(e) => handleInputChange(index, e)}
                /> Present
                <input
                  type="radio"
                  name={`attendance-${index}`}
                  value="Absent"
                  onChange={(e) => handleInputChange(index, e)}
                /> Absent
              </td>
              <td>
                <input
                  type="radio"
                  name={`sickLeave-${index}`}
                  value="true"
                  onChange={(e) => handleInputChange(index, e)}
                  disabled={formData[index]?.[`attendance-${index}`] !== "Absent"}
                /> Yes
                <input
                  type="radio"
                  name={`sickLeave-${index}`}
                  value="false"
                  onChange={(e) => handleInputChange(index, e)}
                  disabled={formData[index]?.[`attendance-${index}`] !== "Absent"}
                /> No
              </td>
              <td>
                <input
                  type="radio"
                  name={`casualLeave-${index}`}
                  value="true"
                  onChange={(e) => handleInputChange(index, e)}
                  disabled={formData[index]?.[`attendance-${index}`] !== "Absent"}
                /> Yes
                <input
                  type="radio"
                  name={`casualLeave-${index}`}
                  value="false"
                  onChange={(e) => handleInputChange(index, e)}
                  disabled={formData[index]?.[`attendance-${index}`] !== "Absent"}
                /> No
              </td>
              <td>
                <input
                  type="text"
                  name={`remark-${index}`}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

export default Attendance;
