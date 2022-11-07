import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import jwt from 'jwt-decode';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

export default function Dashboard() {
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

  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/"});
    window.location.href = "/";
  }

  return (
    <div className="text-center">
      <h1 className="text-center">Dashboard</h1>
      <h2 className="text-center">{"Hello " + username}</h2>
      <Button type="submit" variant="danger" onClick={() => logout()}>Logout</Button>
    </div>
  );
}