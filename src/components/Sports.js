import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';
import Logout from './Logout';



export default function Sports(props) {
  const [team, setTeam] = useState("");
  const [message, setMessage] = useState("");
  const [validTeam, setValidTeam] = useState(false);
  const [loserTeams, setLoserTeams] = useState([]);

  const findTeams = (e) => {
    //Prevent full page refresh
    e.preventDefault();
    const sportsTeams = localStorage.getItem("sports");
    const sportsTeamsJson = JSON.parse(sportsTeams);
    console.log(sportsTeamsJson.Juventus);
    if(sportsTeamsJson[team]) {
      setValidTeam(true);
      setLoserTeams(sportsTeamsJson[team]);
    } else {
      setValidTeam(false);
    }


  }

  return (
    <Container className="dashContainer">
      {/* */}
      <Row className="titleRow">
        <Col className="d-flex align-items-center justify-content-start" sm={8}>
          <h1 style={{color: 'white', fontSize: '5em'}}>Sports</h1>
        </Col>
        <Col className="d-flex align-items-center justify-content-end logoutContainer" sm={2}>
          <Logout />
        </Col>
      </Row>
      {/*News Image - Unable to source story image from rss*/}
      <Row className="align-items-center"> 
        <h2 className="text-center">Enter an Italia Ligue 1 sports team to find out who they beat!</h2>
      </Row>  
      <Row className="contentRow">
        <Col className="d-flex align-items-top justify-content-center newsExtendedImg">
          <Form>
            <Form.Control 
              className="bg-transparent"
              type="email"
              name="email"
              size="lg"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              onBlur={(e) => findTeams(e)}
              placeholder="Enter team..." 
            />
            {message}
          </Form>
        </Col>
        <div className="imageList" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {validTeam ? <p>These are the teams that {team} beat.</p> : 
          <p>{team} is not a valid team, try again.</p>}
        {/*If state contains loserTeams, display them*/}
        {loserTeams ? Object.entries(loserTeams).map((entry) => {
          return (
            <ListGroup>
              <ListGroup.Item>{entry[1]}</ListGroup.Item>
            </ListGroup>
          ) 
        }) : null}
      </div>
      </Row>
      {/*News description*/}
      <Row className="align-items-center">

      </Row>
    </Container>
  )

}