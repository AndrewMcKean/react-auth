import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Logout from './Logout';

export default function NewsExtended() {
  
  return (
    <Container className="dashContainer">
      {/* Title row */}
      <Row className="titleRow">
        <Col className="d-flex align-items-center justify-content-start" sm={8}>
          <h1 style={{color: 'white', fontSize: '5em'}}>News</h1>
        </Col>
        <Col className="d-flex align-items-center justify-content-end logoutContainer" sm={2}>
          <Logout />
        </Col>
      </Row>
      {/*News Image - Unable to source story image from rss*/}
      <Row className="contentRow">
        <Col className="d-flex align-items-top justify-content-center newsExtendedImg">
          <Image src={localStorage.getItem("newsImg")}  style={{minHeight: '8em', borderRadius: '2%'}} />
        </Col>
      <Row className="align-items-center"> 
        <h2 className="text-center">{localStorage.getItem("newsTitle")}</h2>
      </Row>
      </Row>
      {/*News description*/}
      <Row className="align-items-center">
        <p className="text-center">{localStorage.getItem("newsDesc")}</p>
        <p className="text-center">
          Link to full story <a href={localStorage.getItem("newsLink")} target="_blank" rel="noreferrer">here
          </a>.
        </p>
      </Row>
    </Container>
  )
}