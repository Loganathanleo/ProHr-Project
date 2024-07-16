import React, { useState, useEffect } from "react";
import axios from "axios";
import { Greeting } from "../components/greeting/greeting";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../assets/stylesheets/home.css";
import Attendance from "../components/Forms/Attendance";

function Home() {
  const [data, setData] = useState([]);
  const [attendance, setAttendance] = useState(false);
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/Add");
  };

  const handleUpdate = (item) => {
    navigate("/Update", { state: { item } });
  };

  const handleDelete = (item) => {
    axios
      .delete(`http://127.0.0.1:5000/api/employee/${item._id}`)
      .then((res) => {
        setData(data.filter((emp) => emp._id !== item._id));
      })
      .catch((err) => {
        console.error("Error deleting the employee:", err);
      });
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/employee").then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <div className="container2">
      <div className="w-100">
        <h1 className="text-center mb-4">

          <Greeting />
        </h1>
        <div className="text-center mb-4">
          <Button className="button-24" onClick={handleAdd}>
            Add Employee +
          </Button>
        </div>
      </div>
      <div className="">

        <Button className="button-24" variant="link" onClick={() => setAttendance(false)}>
          Employee Details
        </Button>
        <Button className="button-24" variant="link" onClick={() => setAttendance(true)}>
          Attendance
        </Button>

      </div>
      {!attendance && (
        <div>
          <Table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Emp Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Company Email</th>
                <th>Contact No</th>
                <th colSpan={2}>Actions</th>
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
                    <Button
                      type="button"
                      className="btn btn-success"
                      onClick={() => handleUpdate(index)}
                    >
                      Update
                    </Button>
                  </td>
                  <td>
                    <Button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      {attendance && (
        <Attendance />
      )}
    </div>
  );
}

export default Home;
