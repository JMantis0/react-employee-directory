import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

function EmployeeRow () {

  return <Row>
    <Col>Image</Col>
    <Col>First Name</Col>
    <Col>Last Name</Col>
    <Col>email</Col>
    <Col>phone</Col>
  </Row>

}

export default EmployeeRow;