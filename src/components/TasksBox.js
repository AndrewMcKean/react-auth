import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './index.css';
import Task from './Task';

export default function TasksBox(props) {
  const tasks = props.tasks;

  return (
    <Card className="contentBox">
      <Card.Header style={{background: '#fdfd96', textAlign: 'center', fontSize: '120%', fontWeight: 'bold'}}>
        <a href="./tasks" style={{color: 'black', textDecoration: 'none'}}>{props.cardTitle}</a>
      </Card.Header>
      <Container>
          {/*If state contains tasks, display them*/}
          {tasks ? Object.entries(tasks).map((task) => {
          return (
            <Task key={task[0]} taskKey={task[0]} task={task[1]}   />
          )
      }) : null} 
      </Container>
    </Card>
  )
}