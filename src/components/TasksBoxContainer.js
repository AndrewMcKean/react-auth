import React, { useEffect, useState } from 'react';
import './index.css';
import TasksBox from './TasksBox';

export default function TasksBoxContainer() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //Get maximum of 3 todo items and display them in dashboard container
    //These remain toggle-able between checked/unchecked 
    //This updates the localStorage items also
    const maxIterations = 3;
    const taskMap = JSON.parse(localStorage.getItem("taskMap"));
    const taskMapSize = Object.keys(taskMap).length;

    if(taskMapSize > maxIterations) {
      const sliced = Object.fromEntries(
        Object.entries(taskMap).slice(0, 3)
      );

      setTasks(sliced);
      console.log(sliced);
    } else {
      setTasks(taskMap)
    }
  }
  , [])

  return (
    <TasksBox cardTitle="Tasks" tasks={tasks} />
  )
}