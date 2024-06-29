import React, { useState } from "react";
import axios from "axios";
import { Alert, Button, Form, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../assets/stylesheets/addemployee.css"; // Import the new CSS file

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
    <div className="container">
      <h3>Add Employee</h3>
      {successMessage && <Alert variant="success" className="alert">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger" className="alert">{errorMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <FormLabel htmlFor="name" className="form-label">Employee Name :</FormLabel>
          <input
            type="text"
            id="name"
            className="input"
            placeholder="Enter the employee name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FormLabel htmlFor="dob" className="form-label">Date of Birth :</FormLabel>
          <input type="date" id="dob" className="input" onChange={handleChange} />
        </div>
        <div className="form-group">
          <FormLabel htmlFor="contactno" className="form-label">Contact No :</FormLabel>
          <input
            type="tel"
            id="contactno"
            className="input"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FormLabel htmlFor="jobrole" className="form-label">Role :</FormLabel>
          <input
            type="text"
            id="jobrole"
            className="input"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FormLabel htmlFor="email" className="form-label">Email :</FormLabel>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="Enter email address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FormLabel htmlFor="company_email" className="form-label">Company Email :</FormLabel>
          <input
            type="email"
            id="company_email"
            className="input"
            placeholder="Enter company email address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FormLabel htmlFor="aadharno" className="form-label">Aadhaar :</FormLabel>
          <input
            type="text"
            id="aadharno"
            className="input"
            onChange={handleChange}
            required
          />
        </div>
        <Button className="button" type="submit">Sign Up</Button>
      </Form>
    </div>
  );
}

export default AddEmployee;
