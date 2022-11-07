import React from "react";
import { Row } from "react-bootstrap";
import Register from "./Register";

export default function RegisterContainer() {
  return (
    <>
      <h1 className="pageTitleSignUp">Dev challenge</h1>
      <Row>
        {/* Register */}
          <Register />
      </Row>
    </>
  );
}