import React from "react";
import {Col, Row, Container} from 'react-bootstrap';
import DashGreeting from "./DashGreeting";
import Logout from "./Logout";
import ProfilePicture from './ProfilePicture';
import ContentBox from './ContentBox';
import WeatherBoxContainer from './WeatherBoxContainer';
import NewsBoxContainer from './NewsBoxContainer';


export default function Dashboard() {


  return (
    <Container className="dashContainer">
      {/* */}
      <Row className="titleRow">
        <Col className="d-flex align-items-center justify-content-center" sm={2}>
          <ProfilePicture />
        </Col>
        <Col className="d-flex align-items-center justify-content-center" sm={8}>
          <DashGreeting />
        </Col>
        <Col className="d-flex align-items-center justify-content-end logoutContainer" sm={2}>
          <Logout />
        </Col>
      </Row>
      {/*First content row*/}
      <Row className="contentRow">
        <Col className="d-flex align-items-center justify-content-start">
          <WeatherBoxContainer />
        </Col>
        <Col className="d-flex align-items-center justify-content-center"> 
          <NewsBoxContainer cardTitle="News" />
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <ContentBox cardTitle="Sport" cardContent="Sport things" />
        </Col>
      </Row>
      {/*Second content row */}
      <Row className="contentRow">
        <Col className="d-flex align-items-center justify-content-start">
          <ContentBox cardTitle="Pics" cardContent="Pics things" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <ContentBox cardTitle="Tasks" cardContent="ToDos things" />
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <ContentBox cardTitle="Clothes" cardContent="Clothes things" />
        </Col>
      </Row>
    </Container>
  );
}