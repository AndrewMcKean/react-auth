import React, {useEffect, useState} from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './index.css';
import Clouds from "../assets/Clouds_icon.png";
import Rain from "../assets/Rain_icon.png";
import Sun from "../assets/Sun_icon.png";

export default function WeatherBox(props) {

  const [icon, setIcon] = useState("");

  
  useEffect(() => {
    if(props.icon === 'Sun') {
      setIcon(Sun)
    } else if (props.icon === 'Rain') {
      setIcon(Rain)
    } else {
      setIcon(Clouds)
    }
    // disabling on linter as props.icon is accessible on page load
    // eslint-disable-next-line
  }, [])


  return (
    <Card className="contentBox" >
      <Card.Header style={{background: '#fdfd96', textAlign: 'center', fontSize: '120%', fontWeight: 'bold'}}>
        {props.cardTitle}
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
          {/*Rain/Sun/Cloud*/}
            <Card.Img variant="top" src={icon} style={{width: '6rem'}} />
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Card.Text>
              {/*Temperature*/}
              {props.temp + " degrees"}
            </Card.Text>
          </Col>
        </Row>
        <Row style={{height: '6rem'}}>
          <Col className="d-flex align-items-center justify-content-center">
            <Card.Text style={{fontSize: '140%', fontWeight: '450'}}>
                {/*Location*/}
                {props.location}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
