import React, { useState, useEffect } from "react";
import axios from "axios";
import { Greeting } from "../components/greeting/greeting";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/Add");
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/employee").then((res) => {
      console.log(res.data.data, "table data...........");
      setData(res.data.data);
    });
  }, []);
  return (
    <div>
      <div className="w-100">
        <h1 xs={12} className="text-center mb-4">
          <Greeting />
        </h1>
        <Button onClick={handleAdd}>Add Employee +</Button>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Emp Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Company Email</th>
              <th>Contact No</th>
              <th colSpan={2}>Actions</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {data.map((index) => (
              <tr key={index._id}>
                <td>{index.name}</td>
                <td>{index.email}</td>
                <td>{index.jobrole}</td>
                <td>{index.company_email}</td>
                <td>{index.contactno}</td>
                <td>
                  <Button type="button" className="btn btn-success">Update</Button>
                </td>
                <td>
                  <Button type="button" className="btn btn-danger">Delete</Button>
                </td>
                <td>
                  <Button type="button" className="btn btn-info">Mark Attendance</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Home;
