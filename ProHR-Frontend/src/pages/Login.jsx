/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../assets/stylesheets/Login.css";
import { Button, Form, FormGroup, FormLabel, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/Authcontext";

function Login() {
  const [signin, setSignin] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:5000/api/register", formData)
      .then((res) => {
        console.log(res.data);
        setSignin(true);
      })
      .catch((error) => console.log("Error: ", error));
  };

  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:5000/api/login", loginData)
      .then((res) => {
        if (res.data) {
          login();
          navigate("/Home");
          console.log(res.data);
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
        <div className="form-container">
          <h1>HR PORTAL</h1>
          <h3 className="text">Register yourself</h3>
          <Form onSubmit={handleSubmit}>
            <FormGroup as={Row}>
              <FormLabel column sm={3} htmlFor="name">
                Name:
              </FormLabel>
              <Col sm={9}>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup as={Row}>
              <FormLabel column sm={3} htmlFor="dob">
                Date of Birth:
              </FormLabel>
              <Col sm={9}>
                <input
                  type="date"
                  id="dob"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup as={Row}>
              <FormLabel column sm={3} htmlFor="contactno">
                Contact No:
              </FormLabel>
              <Col sm={9}>
                <input
                  type="tel"
                  id="contactno"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup as={Row}>
              <FormLabel column sm={3} htmlFor="role">
                Role:
              </FormLabel>
              <Col sm={9}>
                <input
                  type="text"
                  id="role"
                  className="form-control"
                  value={formData.role}
                  readOnly
                />
              </Col>
            </FormGroup>
            <FormGroup as={Row}>
              <FormLabel column sm={3} htmlFor="email">
                Email:
              </FormLabel>
              <Col sm={9}>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup as={Row}>
              <FormLabel column sm={3} htmlFor="password">
                Password:
              </FormLabel>
              <Col sm={9}>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  required
                />
              </Col>
            </FormGroup>
            <Button type="submit" className="btn btn-primary mt-3">
              Sign Up
            </Button>
          </Form>
          <p className="mt-3">
            Already have an account?{" "}
            <a onClick={() => setSignin(true)} className="text-primary">
              Sign in
            </a>
          </p>
        </div>
      )}

      {signin && (
        <div className="form-container">
          <h1>HR PORTAL</h1>
          <h3 className="text1">Login please!!!</h3>
          <Form onSubmit={handleSignin}>
            <FormGroup as={Row}>
              <FormLabel column sm={3} htmlFor="email">
                Email:
              </FormLabel>
              <Col sm={9}>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="form-control"
                  onChange={handleLoginChange}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup as={Row}>
              <FormLabel column sm={3} htmlFor="password">
                Password:
              </FormLabel>
              <Col sm={9}>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="form-control"
                  onChange={handleLoginChange}
                  required
                />
              </Col>
            </FormGroup>
            <Button type="submit" className="btn btn-primary mt-3">
              Sign in
            </Button>
            {error && <p className="text-danger mt-3">{error}</p>}
          </Form>
          <p className="mt-3">
            Don't have an account?{" "}
            <a onClick={() => setSignin(false)} className="text-primary">
              Sign up
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;
