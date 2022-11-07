import React, {useState} from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register, setRegister] = useState("");
  
  const handleSubmit = (e) => {
    //Prevent form from refreshing the whole page
    e.preventDefault();
    
    // set configurations
    const configuration = {
      method: "post",
      url: "https://challenge-auth-app.herokuapp.com/register",
      data: {
        username,
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  }

  return(
    <>
      <h2>Register</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
          <Row>
            <Col>
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username" 
              />
            </Col>

            <Col>
              {/* email */}
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
              />
            </Col>
          </Row>
          <Row>
            <Col>
            {/* Password */}
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            </Col>
            <Col>
              {/* Confirm password */}
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
              />
            </Col>
          </Row>
          <Row>
            {/*Display success message*/}
              {register ? (
                <p className="text-success">You are registered successfully</p>
              ) : (
                <p className="text-danger">You are not registered</p>
              )}

            {/* Submit button */}
            <Button 
              variant="primary" 
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          </Row>
      </Form>
    </>
  )
}