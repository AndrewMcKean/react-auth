import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, ListGroup, Button } from 'react-bootstrap';
import Logout from './Logout';
import TaskAdd from './TaskAdd';
import Task from './Task';



export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [checked, setChecked] = useState(false);
  
  const addTask = (task, taskMapSize) => {
    const taskToAdd = {[taskMapSize] : {"task" : task, "complete" : false}}
    
    if(tasks) {
      setTasks(prev => [...tasks, taskToAdd]);
    } else {
      setTasks([taskToAdd])
    }
  }
  
  // Get saved tasks and add them to state
  useEffect(() => {
    const taskList = JSON.parse(localStorage.getItem('taskMap'));
    
    Object.entries(taskList).map((e) => console.log(e))
    console.log(taskList);
    setTasks(taskList);
   
    console.log(tasks);
  }, [])

  return (
    <Container>
      {/* */}
      <Row className="titleRow">
        <Col className="d-flex align-items-center justify-content-start" sm={8}>
          <h1 style={{color: 'white', fontSize: '5em'}}>Tasks</h1>
        </Col>
        <Col className="d-flex align-items-center justify-content-end logoutContainer" sm={4}>
          <Logout />
        </Col>
      </Row>
      {/*Render tasks*/}
      {tasks ? Object.entries(tasks).map((task) => {
        return (
          <Task taskKey={task[0]} task={task[1]}   />
        )
      }) : null}      
      {/*Add tasks*/}
      <TaskAdd addTask={addTask} />
    </Container>
  )

}