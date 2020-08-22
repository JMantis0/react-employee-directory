import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EmployeeRow ({ shown, thumbnail, firstName, lastName, email, phone }) {

  return <Row style={{display: shown}}>
    <Col xs={1}><img style={{width: 50, height:50}} src={thumbnail} alt="employeeImage"></img></Col>
    <Col xs={3} style={{textAlign: "left"}}>{firstName}</Col>
    <Col xs={3} style={{textAlign: "left"}}>{lastName}</Col>
    <Col xs={3} style={{textAlign: "left"}}>{email}</Col>
    <Col xs={2} style={{textAlign: "left"}}>{phone}</Col>
  </Row>

}

export default EmployeeRow;