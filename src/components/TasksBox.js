import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import './index.css';


export default function TasksBox(props) {
  const tasks = props.tasks;


  return (
    <Card className="contentBox">
      <Card.Header style={{background: '#fdfd96', textAlign: 'center', fontSize: '120%', fontWeight: 'bold'}}>
        <a href="./tasks" style={{color: 'black', textDecoration: 'none'}}>{props.cardTitle}</a>
      </Card.Header>
      <Container>
          {/*If state contains tasks, display them*/}
          {tasks ? Object.entries(tasks).map((entry) => {
          return (
            <></>
          ) 
        }) : null}
      </Container>
    </Card>
  )
}