import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";


export default function TaskAdd(props) {
  const [task, setTask] = useState([]);

  const handleClick = () => {
    const taskMap = JSON.parse(localStorage.getItem("taskMap"));
    const taskMapSize = "Task" + Object.keys(taskMap).length;

    props.addTask(task, taskMapSize);
    addTaskLocal(task, taskMapSize);
    
  }

  const saveServer = (task) => {

    
  }


  const addTaskLocal = (task, taskMapSize) => {
      
    /*localStorage set here */
    const taskMap = JSON.parse(localStorage.getItem("taskMap"));
    Object.assign(taskMap, {[taskMapSize] : {"task" : task, "complete": false}});
    localStorage.setItem("taskMap", JSON.stringify(taskMap));

    //saveServer();

    setTask("");
   }

  return (
    <Row>
      <Col>
        <Form.Control
          className="bg-transparent"
          type="text"
          name="task"
          value={task}
          placeholder="Task"
          onChange={(e) => setTask(e.target.value)}
        />
      </Col>
      <Col className="d-flex align-items-center justify-content-end">
        <Button
          variant="custom"
          onClick={(e) => handleClick()}
          >
            Add Task
          </Button>
      </Col>
    </Row>
  )
}