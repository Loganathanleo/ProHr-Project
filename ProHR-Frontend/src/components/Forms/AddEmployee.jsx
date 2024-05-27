import React from "react";
import { Button, Form, FormLabel } from "react-bootstrap";

function AddEmployee() {
  const handleSubmit = () => {};

  return (
    <div>
      <h3>Add Employee</h3>
      <Form>
        <div>
          <FormLabel htmlFor="name">Employee Name :</FormLabel>
          <input
            type="text"
            id="name"
            placeholder="Enter the employee name"
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="dob">Date of Birth :</FormLabel>
          <input type="date" id="dob" />
        </div>
        <div>
          <FormLabel htmlFor="phno">Contact No :</FormLabel>
          <input
            type="tel"
            id="phno"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="degree">Degree :</FormLabel>
          <input type="text" id="degree" />
        </div>
        <div>
          <FormLabel htmlFor="address">Address :</FormLabel>
          <input type="textbox" id="address" />
        </div>
        <div>
          <FormLabel htmlFor="city">City :</FormLabel>
          <input type="text" id="city" />
        </div>
        <div>
          <FormLabel htmlFor="state">State :</FormLabel>
          <input type="text" id="state" />
        </div>
        <div>
          <FormLabel htmlFor="country">Country :</FormLabel>
          <input type="text" id="country" />
        </div>
        <div>
          <FormLabel htmlFor="nation">Nationality :</FormLabel>
          <input type="text" id="nation" />
        </div>
        <div>
          <FormLabel htmlFor="role">Role :</FormLabel>
          <input type="text" id="role" required />
        </div>
        <div>
          <FormLabel htmlFor="email">Email :</FormLabel>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
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
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="aadhaar">Aadhaar :</FormLabel>
          <input
            type="text"
            id="aadhaar"
            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="join">Date of Joining :</FormLabel>
          <input type="date" id="join" />
        </div>
        <Button onClick={handleSubmit}>Sign Up</Button>
      </Form>
    </div>
  );
}

export default AddEmployee;
