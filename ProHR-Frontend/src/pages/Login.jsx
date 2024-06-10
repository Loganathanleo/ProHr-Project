import React, { useState } from "react";
import "../assets/stylesheets/Login.css";
import { Button, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [signin, setSignin] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    contactno: "",
    role: "HR",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:5000/api/register", formData)
      .then((res) => {
        console.log(res.data)
        setSignin(true);
      })
      .catch((error) => console.log("Error: ", error));
  };

  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSignin = async(e) => {
    console.log(loginData, "logindataaaaaaaaaa");
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:5000/api/login", loginData) 
      .then((res) => {
        if (res.data) {
          navigate("/Home");
        } else {
          setError("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {!signin && (
        <div className="w-100">
          <div
            xs={12}
            className="d-flex flex-column justify-content-evenly align-items-center"
          >
            <h3 className="text">Register yourself</h3>
            <Form onSubmit={handleSubmit}>
              <FormGroup as={Row}>
                <FormLabel htmlFor="name">Name :</FormLabel>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel htmlFor="dob">Date of Birth :</FormLabel>
                <input type="date" id="dob" onChange={handleChange} required/>
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel htmlFor="contactno">Contact No :</FormLabel>
                <input
                  type="tel"
                  id="contactno"
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel htmlFor="role">Role :</FormLabel>
                <input
                  type="text"
                  id="role"
                  value={formData.role}
                  readOnly
                />
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel htmlFor="email">Email :</FormLabel>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                  required
                />
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel htmlFor="password">Password :</FormLabel>
                <input
                  type="text"
                  id="password"
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </FormGroup>
              <Button type="submit">Sign Up</Button>
            </Form>
            <p>
              Already have an account?{" "}
              <a onClick={() => setSignin(true)} className="text-primary">
                sign in
              </a>
            </p>
          </div>
        </div>
      )}

      {signin && (
        <div className="w-100">
          <div
            xs={12}
            className="d-flex flex-column justify-content-evenly align-items-center"
          >
            <h3 className="text">Login please!!!</h3>
            <Form onSubmit={handleSignin}>
              <FormGroup as={Row}>
                <FormLabel htmlFor="email">Email :</FormLabel>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  onChange={handleLoginChange}
                  required
                />
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel htmlFor="password">Password :</FormLabel>
                <input
                  type="text"
                  id="password"
                  placeholder="Enter your password"
                  onChange={handleLoginChange}
                  required
                />
              </FormGroup>
              <Button type="submit">Sign in</Button>
              {error && <p className="text-danger">{error}</p>}
            </Form>
            <p>
              Don't have an account?{" "}
              <a onClick={() => setSignin(false)} className="text-primary">
                sign up
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
