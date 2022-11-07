import React, {useState} from 'react';
import { Container, Form, Button, Col, Row, Alert } from 'react-bootstrap';
import axios from "axios";
import './index.css';


export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  
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
        alert("Success! Please login.")
        window.location.href = "/login";
      })
      .catch((message, error) => {
        error = new Error();
        setError(true);
        setMessage(message.response.data.message + ": email already signed up.");
      });
  }

  return(
    <Container className="registerContainer">
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Row>
          <Col>
            <Form.Control 
              className="bg-transparent"
              type="username"
              name="username"
              size="lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username" 
            />
          </Col>

          <Col>
            {/* email */}
            <Form.Control
              className="bg-transparent"
              size="lg"
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
          <Form.Control
            className="bg-transparent"
            size="lg"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          </Col>
          <Col>
            {/* Confirm password */}
            <Form.Control
              className="bg-transparent"
              size="lg"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
          </Col>
            {/* display message */}
            {error ? (
              <p className="text-danger">{message}</p>
            ) : (
              <></>
            )}
          </Row>
            {/* Submit button */}
            <Button 
              variant="custom"
              className=""
              size="lg"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
      </Form>
    </Container>
  )
}