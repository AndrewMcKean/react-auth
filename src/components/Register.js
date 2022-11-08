import React, {useState} from 'react';
import { Container, Form, Button, Col, Row, Card } from 'react-bootstrap';
import axios from "axios";
import './index.css';


export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [message, setMessage] = useState("");
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

  //Set up to programatically click "choose file"
  const inputFileRef = React.useRef();  
  const handleClick = (e) => {
    inputFileRef.current.click();
  }

  const handleImage = (e) => {
    setProfileImg(e);
  }

  return(
    <Container className="registerContainer text-center">
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
          <Row className="d-flex align-items-center justify-content-center">
          {!profileImg ? (
            <Card style={{width: '25%', height: '12rem', background: 'rgba(218, 223, 225, 0.5)', borderStyle: 'solid', borderColor: '#fdfd96', borderWidth: '1px'}}>
              <Form.Control
                className="d-flex align-items-center justify-content-center"
                type="file"
                ref={inputFileRef}
                name="profileImage"
                value={profileImg}
                style={{visibility: 'hidden'}}
                onChange={(e) => handleImage(e.target.value)}
              />
              <Card.Text
                variant="custom"
                style={{background: 'transparent', color: '#fdfd96'}}
                onClick={(e) => handleClick(e.target.value)}
              >
                Add Picture
              </Card.Text> 
            </Card>
            ) : (
              <Card style={{width: '25%', height: '12rem', background: 'rgba(218, 223, 225, 0.5)', borderStyle: 'solid', borderColor: '#fdfd96', borderWidth: '1px'}}>
                <Card.Img src={profileImg} />
              </Card>
            )
          }
          </Row>
          {/* Submit button */}
          <Button 
            variant="custom"
            className=""
            size="lg"
            type="submit"
            style={{marginTop: '1em', backgroundColor: '#fdfd96'}}
            onClick={(e) => handleSubmit(e)}
          >
            Sign up!
          </Button>
      </Form>
    </Container>
  )
}