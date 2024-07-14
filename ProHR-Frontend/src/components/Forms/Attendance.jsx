import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";


function Attendance() {

  const [data, setData] = useState([]);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/employee").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFormData = [...formData];
    if (!updatedFormData[index]) {
      updatedFormData[index] = { 
        employee_id: data[index]._id,
      };
    }
    updatedFormData[index][name] = value;

    if (name === `attendance-${index}` && value === "Present") {
      updatedFormData[index][`sickleave-${index}`] = "false";
      updatedFormData[index][`casualleave-${index}`] = "false";
    }

    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    
    const formattedData = formData.map((entry) => ({
      employee_id: entry.employee_id,
      attendance: entry[`attendance-${data.findIndex(emp => emp._id === entry.employee_id)}`],
      sickleave: entry[`sickleave-${data.findIndex(emp => emp._id === entry.employee_id)}`] === "true",
      casualleave: entry[`casualleave-${data.findIndex(emp => emp._id === entry.employee_id)}`] === "true"
    }));

    console.log(formattedData, "++++++++++");

    axios.post("http://127.0.0.1:5000/api/attendance", formattedData).then((res) => {
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
                  name={`sickleave-${index}`}
                  value="true"
                  onChange={(e) => handleInputChange(index, e)}
                  disabled={formData[index]?.[`attendance-${index}`] !== "Absent"}
                /> Yes
                <input
                  type="radio"
                  name={`sickleave-${index}`}
                  value="false"
                  onChange={(e) => handleInputChange(index, e)}
                  disabled={formData[index]?.[`attendance-${index}`] !== "Absent"}
                /> No
              </td>
              <td>
                <input
                  type="radio"
                  name={`casualleave-${index}`}
                  value="true"
                  onChange={(e) => handleInputChange(index, e)}
                  disabled={formData[index]?.[`attendance-${index}`] !== "Absent"}
                /> Yes
                <input
                  type="radio"
                  name={`casualleave-${index}`}
                  value="false"
                  onChange={(e) => handleInputChange(index, e)}
                  disabled={formData[index]?.[`attendance-${index}`] !== "Absent"}
                /> No
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
