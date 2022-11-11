/* eslint-disable */
import React, {useEffect, useState} from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default function Task(props) {
  const [task, setTask] = useState("");
  const [toComplete, setToComplete] = useState(true);
  const [taskID, setTaskID] = useState(0);

  const handleCheck = (e) => {
    setToComplete(!toComplete);
    updateLocal();
  }
  
  const updateLocal = () => {
    /*localStorage set here */
    const taskMap = JSON.parse(localStorage.getItem("taskMap"));
    Object.assign(taskMap, {[taskID] : {"task": task, "complete": toComplete}});
    localStorage.setItem("taskMap", JSON.stringify(taskMap));

    //saveServer();
    //Couldn't get this to work sadly
  }

  useEffect(() => {
    setTaskID(props.taskKey);
    setTask(props.task.task);
    setToComplete(!(props.task.complete));

  }, [])

  return (
    <Row>
      <Col>
        <p>{task}</p>
      </Col>
      
      <Col className='d-flex align-items-center justify-content-end'>
        <Form.Check 
          type="checkbox"
          onChange={(e) => handleCheck(e)}
        />
      </Col> 
    </Row>
  )
}