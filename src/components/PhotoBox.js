import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import './index.css';
import PlaceholderImg from '../assets/Sun_icon.png';

export default function PhotoBox(props) {

  return (
    <Card className="contentBox" style={{width: '20rem', height: '15rem', background: 'rgba(218, 223, 225, 0.5)'}}>
      <Card.Header style={{background: '#fdfd96', textAlign: 'center', fontSize: '120%', fontWeight: 'bold'}}>
        <a href="./photos" style={{color: 'black', textDecoration: 'none'}}>{props.cardTitle}</a>
      </Card.Header>
      <Container>
        <Row className="text-center">
          <Col className="text-center">
            <Image src={PlaceholderImg} style={{maxWidth: "60%", paddingTop: "0.5em"}}/>
          </Col>
          <Col className="text-center">
          <Image src={PlaceholderImg} style={{maxWidth: "60%", paddingTop: "0.5em"}}/>
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="text-center">
            <Image src={PlaceholderImg} style={{maxWidth: "60%", paddingTop: "1em"}}/>
          </Col>
          <Col className="text-center">
            <Image src={PlaceholderImg} style={{maxWidth: "60%", paddingTop: "1em"}}/>
          </Col>
        </Row>
      </Container>
    </Card>
  )
}