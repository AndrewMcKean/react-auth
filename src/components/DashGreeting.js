//Target for refactor now I'm more comfortable using localStorage

import React, { useEffect, useState } from "react";
import './index.css';

export default function Greeting() {
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem("username")));
  }, [])
  
  return (
      <h1 className="dashGreeting text-center">Good day {username}</h1>
  );
}