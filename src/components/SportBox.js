import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import './index.css';


export default function PieBox(props) {
  return (
    <Container>
    <Card className="contentBox" style={{width: '20rem', height: '15rem', background: 'rgba(218, 223, 225, 0.5)'}}>
      <Card.Header style={{background: '#fdfd96', textAlign: 'center', fontSize: '120%', fontWeight: 'bold'}}>
        {props.cardTitle}
      </Card.Header>
      <Card.Text className="text-center">
        <Row>
          <Card.Text>Colour: Garment: Days worn<br /></Card.Text>
        </Row>
        <Row>
        <Col style={{width: '50%'}}>
          {props.pie}
        </Col>
        <Col style={{fontSize: '90%', justifyContent: 'flex-start'}}>
          <Row>
            <Card.Text>
              &nbsp;Teal: Blazer: 146<br />
              &nbsp;Green: Raincoat: 171 <br />
              &nbsp;Gray: Jumper: 189 <br />
              &nbsp;Purple: Hoodie: 153 <br />
              &nbsp;Yellow: Jacket: 171 <br />
              &nbsp;Orange: Sweater: 170 <br />
            </Card.Text>
          </Row>
        </Col>
        </Row>
      </Card.Text>
    </Card>
    </Container>
  )
}