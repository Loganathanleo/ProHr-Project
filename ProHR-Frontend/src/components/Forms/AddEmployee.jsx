import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { Button, Form, FormLabel } from "react-bootstrap";

function AddEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phone: "",
    degree: "",
    address: "",
    city: "",
    state: "",
    country: "",
    nation: "",
    role: "",
    email: "",
    cemail: "",
    aadhaar: "",
    join: "",
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
      const response = await axios.post("", formData);

      if (response.status === 200) {
        setSuccessMessage("Employee was added successfully");
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
          <FormLabel htmlFor="phno">Contact No :</FormLabel>
          <input
            type="tel"
            id="phno"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="degree">Degree :</FormLabel>
          <input type="text" id="degree" onChange={handleChange} />
        </div>
        <div>
          <FormLabel htmlFor="address">Address :</FormLabel>
          <input type="textbox" id="address" onChange={handleChange} />
        </div>
        <div>
          <FormLabel htmlFor="city">City :</FormLabel>
          <input type="text" id="city" onChange={handleChange} />
        </div>
        <div>
          <FormLabel htmlFor="state">State :</FormLabel>
          <input type="text" id="state" onChange={handleChange} />
        </div>
        <div>
          <FormLabel htmlFor="country">Country :</FormLabel>
          <input type="text" id="country" onChange={handleChange} />
        </div>
        <div>
          <FormLabel htmlFor="nation">Nationality :</FormLabel>
          <input type="text" id="nation" onChange={handleChange} />
        </div>
        <div>
          <FormLabel htmlFor="role">Role :</FormLabel>
          <input type="text" id="role" onChange={handleChange} required />
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
          <FormLabel htmlFor="cemail">Company Email :</FormLabel>
          <input
            type="email"
            id="cemail"
            placeholder="Enter company email address"
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="aadhaar">Aadhaar :</FormLabel>
          <input
            type="text"
            id="aadhaar"
            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="join">Date of Joining :</FormLabel>
          <input type="date" id="join" onChange={handleChange} />
        </div>
        <Button onClick={handleSubmit}>Sign Up</Button>
      </Form>
    </div>
  );
}

export default AddEmployee;
