//Target for refactor now I'm more comfortable using localStorage

import React, { useEffect, useState } from "react";
import './index.css';
import axios from "axios";
import jwt from 'jwt-decode';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

export default function Greeting() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "https://challenge-auth-app.herokuapp.com/dashboard",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(configuration)
      .then((result) => {
        const user = jwt(token);
        setUsername(user.userName);
      })
      .catch((error) => {
        error = new Error();
      })
  }, [])

  return (
      <h1 className="dashGreeting text-center">Good day {username}</h1>
  );
}