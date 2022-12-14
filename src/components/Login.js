import React, {useState} from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './index.css';
import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    //Prevent form from refreshing whole page
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
        //Cache cookie and redirect
        localStorage.setItem("profileImg", JSON.stringify(result.data.profileImg));
        localStorage.setItem("photoMap", JSON.stringify(result.data.photoMap));
        localStorage.setItem("taskMap", JSON.stringify(result.data.taskMap));
        localStorage.setItem("email", JSON.stringify(result.data.email));
        localStorage.setItem("username", JSON.stringify(result.data.username))
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });

        window.location.href = "/dashboard";
      })
      .catch((message, error) => {
        error = new Error();
        setError(true);
        setMessage(message.response.data.message + "");
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
              placeholder="Enter Email" 
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
        {/* display message */}
          {error ? (
            <p className="text-danger">{message}</p>
              ) : (
              <></>
          )}

        {/* Submit button */}
        <Button 
          variant="custom"
          style={{background: '#fdfd96'}}
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