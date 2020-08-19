import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EmployeeRow ({ thumbnail, firstName, lastName, email, phone }) {

  return <Row>
    <Col><img style={{width: 50, height:50}} src={thumbnail}></img></Col>
    <Col>{firstName}</Col>
    <Col>{lastName}</Col>
    <Col>{email}</Col>
    <Col>{phone}</Col>
  </Row>

}

export default EmployeeRow;