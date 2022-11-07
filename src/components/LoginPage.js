import React from "react";
import { Col, Row } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";
import SignUp from "./SignUp";

export default function LoginPage() {
  return (
    <>
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