import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

function SignIn() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getUsername = localStorage.getItem("username");
  const getPassword = localStorage.getItem("password");

  const handleSubmit = () => {
    if (username !== "" && password !== "") {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigate("/home");
    } else {
      setValidated(true);
    }
  };

  return (
    <div>
      <Container>
        {getUsername && getPassword ? (
          <Home />
        ) : (
          <Form noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Username is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Password is required
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit}>
              LogIn
            </Button>
          </Form>
        )}
      </Container>
    </div>
  );
}

export default SignIn;
