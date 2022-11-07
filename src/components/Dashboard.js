import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

export default function Dashboard() {
  const [message, setMessage] = useState("");
  
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
        setMessage(result.data.message);
        console.log(result);
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
      <h1 className="text-center">Auth Component</h1>
      <h3 className="text-center text-danger">{message}</h3>
      <h4 className="text-center">{token}</h4>
      <Button type="submit" variant="danger" onClick={() => logout()}>Logout</Button>
    </div>
  );
}