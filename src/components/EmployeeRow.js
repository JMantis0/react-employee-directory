import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EmployeeRow ({ firstName, lastName, email, phone }) {

  return <Row>
    <Col>Image</Col>
    <Col>{firstName}</Col>
    <Col>{lastName}</Col>
    <Col>{email}</Col>
    <Col>{phone}</Col>
  </Row>

}

export default EmployeeRow;