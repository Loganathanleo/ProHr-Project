import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { Button, Form, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    contactno: "",
    jobrole: "",
    email: "",
    company_email: "",
    aadharno: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/employee/", formData);

      if (response.status === 200) {
        setSuccessMessage("Employee was added successfully");
        navigate("/Home");
      } else {
        setErrorMessage("Failed to add employee. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h3>Add Employee</h3>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <div>
          <FormLabel htmlFor="name">Employee Name :</FormLabel>
          <input
            type="text"
            id="name"
            placeholder="Enter the employee name"
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="dob">Date of Birth :</FormLabel>
          <input type="date" id="dob" onChange={handleChange} />
        </div>
        <div>
          <FormLabel htmlFor="contactno">Contact No :</FormLabel>
          <input
            type="tel"
            id="contactno"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="jobrole">Role :</FormLabel>
          <input type="text" id="jobrole" onChange={handleChange} required />
        </div>
        <div>
          <FormLabel htmlFor="email">Email :</FormLabel>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="company_email">Company Email :</FormLabel>
          <input
            type="email"
            id="company_email"
            placeholder="Enter company email address"
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="aadharno">Aadhaar :</FormLabel>
          <input
            type="text"
            id="aadharno"
            onChange={handleChange}
            required
          />
        </div>
        <Button onClick={handleSubmit}>Sign Up</Button>
      </Form>
    </div>
  );
}

export default AddEmployee;
