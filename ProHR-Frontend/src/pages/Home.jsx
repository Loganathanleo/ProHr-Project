import React from "react";
import { Greeting } from "../components/greeting/greeting";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleAdd = () => {
        navigate("/Add");
    };
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
                    <th>Degree</th>
                    <th>Role</th>
                    <th>Company Email</th>
                    <th>Contact No</th>
                    <th colSpan={2}>Actions</th>
                    <th>Attendance</th>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
            </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Home;
