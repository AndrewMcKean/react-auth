import React, { useState } from 'react';
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';
import Logout from './Logout';

export default function Sports(props) {
  const [team, setTeam] = useState("");
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
      setLoserTeams("");
    }
    
  }

  return (
    <Container className="dashContainer">
      {/* */}
      <Row className="titleRow">
        <Col className="d-flex align-items-center justify-content-start" sm={8}>
          <h1 style={{color: 'white', fontSize: '5em'}}>Sports</h1>
        </Col>
        <Col className="d-flex align-items-center justify-content-end logoutContainer" sm={4}>
          <Logout />
        </Col>
      </Row>
      {/*News Image - Unable to source story image from rss*/} 
      <Col className="d-block" stlye={{}}>
        <Row>
          <Form.Control 
            className="bg-transparent"
            style={{maxWidth: '60%', marginLeft: 'auto', marginRight: 'auto'}}
            type="text"
            name="text"
            size="lg"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            onBlur={(e) => findTeams(e)}
            placeholder="Enter a Serie A team then click anywhere to see who they beat..." 
          />
          {validTeam ? <p className="text-center">These are the teams that {team} beat.</p> : 
          team ? <p className="text-center">{team} is not a valid team, try again.</p> : null}
          {/*If state contains loserTeams, display them*/}
        </Row>
      </Col>
      <div className="imageList" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {/*If state contains loserTeams, display them*/}
        {loserTeams ? Object.entries(loserTeams).map((entry) => {
            return (
              <ListGroup horizontal variant="">
                <ListGroup.Item style={{margin: '0.5em'}}>{entry[1]}</ListGroup.Item>
              </ListGroup>
            ) 
              }) : null}
      </div>
    </Container>
  )

}