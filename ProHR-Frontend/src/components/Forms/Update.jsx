import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Alert, Button, Form, FormLabel } from "react-bootstrap";
import "../../assets/stylesheets/update.css";

function Update() {
  const location = useLocation();
  const { item } = location.state || {};
  const navigate = useNavigate();

  console.log(item,"...........");

  const [formData, setFormData] = useState({
    name: item?.name || "",
    dob: item?.dob || "",
    contactno: item?.contactno || "",
    jobrole: item?.jobrole || "",
    email: item?.email || "",
    company_email: item?.company_email || "",
    aadharno: item?.aadharno || "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://127.0.0.1:5000/api/employee/${item._id}`, formData);

      if (response.status === 200) {
        setSuccessMessage("Employee data was updated successfully");
        navigate("/Home");
      } else {
        setErrorMessage("Failed to update employee. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div classname="up-container">
      <h3>Update Employee</h3>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <div classname="formdiv">
      <Form onSubmit={handleSubmit}>
        <div>
          <FormLabel htmlFor="name">Employee Name :</FormLabel>
          <input
            type="text"
            id="name"
            value={formData.name}
            placeholder="Enter the employee name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="contactno">Contact No :</FormLabel>
          <input
            type="tel"
            id="contactno"
            value={formData.contactno}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="jobrole">Role :</FormLabel>
          <input
            type="text"
            id="jobrole"
            value={formData.jobrole}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="email">Email :</FormLabel>
          <input
            type="email"
            id="email"
            value={formData.email}
            placeholder="Enter email address"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="company_email">Company Email :</FormLabel>
          <input
            type="email"
            id="company_email"
            value={formData.company_email}
            placeholder="Enter company email address"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="aadharno">Aadhaar :</FormLabel>
          <input
            type="text"
            id="aadharno"
            value={formData.aadharno}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <Button type="submit">Update</Button>
      </Form>
      </div>
    </div>
  );
}

export default Update;