import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function TaskAdd(props) {
  const [task, setTask] = useState([]);

  const handleClick = () => {
    const taskMap = JSON.parse(localStorage.getItem("taskMap"));
    const taskKey = "Task" + Object.keys(taskMap).length;

    //props.addTask(task, taskKey);
    addTaskLocal(task, taskKey);
    
  }


  const addTaskLocal = (task, taskMapSize) => {
      
    //Save to local storage
    const taskMap = JSON.parse(localStorage.getItem("taskMap"));
    Object.assign(taskMap, {[taskMapSize] : {"task" : task, "complete": false}});
    localStorage.setItem("taskMap", JSON.stringify(taskMap));

    props.updateTasks(task);

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