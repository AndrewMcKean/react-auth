import React from "react";
import { Row } from "react-bootstrap";
import './index.css';
import Login from "./Login";
import SignUp from "./SignUp";

export default function LoginPage() {
  return (
    <>
    <h1 className="pageTitle">Dev challenge</h1>
      <Row className="text-center">
        {/* Login */}
        <Login />
      </Row>
      <Row className="text-center">
        {/*Sign-up*/}
        <SignUp />
      </Row>
    </>
  );
}