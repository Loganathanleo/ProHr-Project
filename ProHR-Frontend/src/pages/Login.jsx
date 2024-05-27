import React, { useState } from "react";
import "../assets/stylesheets/Login.css";
import { Button, Form, FormLabel, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const [signin, setSignin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/Home");
  };

  const handleSignin = () => {
    navigate("/Home");
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
            <Form>
              <Row>
                <FormLabel htmlFor="name">Name :</FormLabel>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </Row>
              <Row>
                <FormLabel htmlFor="dob">Date of Birth :</FormLabel>
                <input type="date" id="dob" />
              </Row>
              <Row>
                <FormLabel htmlFor="phno">Contact No :</FormLabel>
                <input
                  type="tel"
                  id="phno"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </Row>
              <Row>
                <FormLabel htmlFor="role">Role :</FormLabel>
                <input type="text" id="role" Value="HR" readOnly />
              </Row>
              <Row>
                <FormLabel htmlFor="email">Email :</FormLabel>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  style={{overflow: "hidden", textOverflow: "ellipsis" }}
                  required
                />
              </Row>
              <Row>
                <FormLabel htmlFor="password">Password :</FormLabel>
                <input
                  type="text"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </Row>
              <Button onClick={handleSubmit}>Sign Up</Button>
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
            <Form>
              <Row>
                <FormLabel htmlFor="email">Email :</FormLabel>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  required
                />
              </Row>
              <Row>
                <FormLabel htmlFor="password">Password :</FormLabel>
                <input
                  type="text"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </Row>
              <Button onClick={handleSignin}>Sign in</Button>
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
