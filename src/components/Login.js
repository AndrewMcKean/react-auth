import React, {useState} from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './index.css';
import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "https://challenge-auth-app.herokuapp.com/login",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        setLogin(true);
        //
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        error = new Error();
      });
  }

  return(
    <Container className="loginContainer">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Row>
          {/* email */}
          <Col>
            <Form.Control
              className="bg-transparent"
              type="email"
              name="email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter email" 
            />
          </Col>
          
        

          {/* Password */}
          <Col>
            <Form.Control
              className="bg-transparent"
              name="password"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password"
            />
          </Col>
        </Row>

        {/* Submit button */}
        <Button 
          variant="custom"
          size="lg"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
      </Form>
    </Container>
  )
}