import React from "react";
import {Col, Row, Container} from 'react-bootstrap';
import DashGreeting from "./DashGreeting";
import Logout from "./Logout";
import ProfilePictureContainer from './ProfilePictureContainer';
import ContentBox from './ContentBox';
import WeatherBoxContainer from './WeatherBoxContainer';
import NewsBoxContainer from './NewsBoxContainer';
import PhotoBoxContainer from './PhotoBoxContainer';
import PieBoxContainer from './PieBoxContainer';
import SportBoxContainer from './SportBoxContainer';
import TasksBoxContainer from './TasksBoxContainer';


export default function Dashboard() {


  return (
    <Container className="dashContainer">
      {/* */}
      <Row className="titleRow">
        <Col className="d-flex align-items-center justify-content-center" sm={2}>
          <ProfilePictureContainer />
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
          <SportBoxContainer cardTitle="Sport" cardContent="Sport things" />
        </Col>
      </Row>
      {/*Second content row */}
      <Row className="contentRow">
        <Col className="d-flex align-items-center justify-content-start">
          <PhotoBoxContainer />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <TasksBoxContainer cardTitle="Tasks" />
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <PieBoxContainer cardTitle="Clothes" />
        </Col>
      </Row>
    </Container>
  );
}