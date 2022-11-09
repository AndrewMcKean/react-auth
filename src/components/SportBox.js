import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './index.css';


export default function SportBox(props) {

  return (
    <Card className="d-flex contentBox" style={{width: '20rem', height: '15rem', background: 'rgba(218, 223, 225, 0.5)'}}>
      <Card.Header style={{background: '#fdfd96', textAlign: 'center', fontSize: '120%', fontWeight: 'bold'}}>
      <a href="./sports" style={{textDecoration: 'none'}}>{props.cardTitle}</a>
      </Card.Header>
      <Col className="d-flex justify-content-center align-items-center">
        <Card.Text className="text-center justify-content-center" >
          Your new favourite sports team has done a sports thing! <br /><br />
          Come find out what by clicking the title!
        </Card.Text>
      </Col>
    </Card>
  )
}