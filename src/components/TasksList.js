/* eslint no-unused-vars: 0 */ // --> OFF
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logout from './Logout';
import TaskAdd from './TaskAdd';
import Task from './Task';

export default function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [taskList, setTaskList] = useState([]);
  
  const updateTasks = (task) => {
    setTaskList((prev) => [...prev, task]);
  }
  
  // Get saved tasks and add them to state
  useEffect(() => {
    const taskList = JSON.parse(localStorage.getItem('taskMap'));
    if(taskList) {
      setTasks(taskList);
    }
    
  }, [])

  //Update page after adding a task
  useEffect(() => {
    const taskList = JSON.parse(localStorage.getItem('taskMap'));
    if(taskList) {
      setTasks(taskList);
    }
  }, [taskList]) 

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
          <Task key={task[0]} taskKey={task[0]} task={task[1]} />
        )
      }) : null}      
      {/*Add tasks*/}
      <TaskAdd updateTasks={updateTasks} />
    </Container>
  )

}