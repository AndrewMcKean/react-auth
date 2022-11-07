import React, {useState} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
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
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Row>
          {/* email */}
          <Col>
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter email" 
            />
          </Col>
          
        

          {/* Password */}
          <Col>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
            />
          </Col>
        </Row>
        

        {/* display success message */}
          {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}

        {/* Submit button */}
        <Button 
          variant="primary" 
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
      </Form>
    </>
  )
}