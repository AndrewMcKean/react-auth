import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './index.css';


export default function PieBox(props) {
  return (
    <Card className="contentBox" style={{width: '20rem', height: '15rem', background: 'rgba(218, 223, 225, 0.5)'}}>
      <Card.Header style={{background: '#fdfd96', textAlign: 'center', fontSize: '120%', fontWeight: 'bold'}}>
        {props.cardTitle}
      </Card.Header>
      <Row className="d-flex align-items-center justify-content-center">
        Colour: Garment: Days worn
      </Row>
      <Row className="d-flex align-items-center justify-content-center">
        <Col style={{width: '50%'}}>
          {props.pie}
        </Col>
        <Col style={{fontSize: '90%', justifyContent: 'flex-start'}}>

            &nbsp;Teal: Blazer: 146<br />
            &nbsp;Green: Raincoat: 171 <br />
            &nbsp;Gray: Jumper: 189 <br />
            &nbsp;Purple: Hoodie: 153 <br />
            &nbsp;Yellow: Jacket: 171 <br />
            &nbsp;Orange: Sweater: 170 <br />

        </Col>
      </Row>
    </Card>
  )
}