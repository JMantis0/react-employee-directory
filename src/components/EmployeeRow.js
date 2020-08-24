import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EmployeeRow({ firstName, lastName, email, phone }) {
  return (
    <Row className="employeeRow">
      <Col xs={1}>
      <i className="fas fa-user"></i>
      </Col>
      <Col xs={2} style={{ textAlign: "left" }}>
        {firstName}
      </Col>
      <Col xs={2} style={{ textAlign: "left" }}>
        {lastName}
      </Col>
      <Col xs={3} style={{ textAlign: "left" }}>
        {email}
      </Col>
      <Col xs={2} style={{ textAlign: "left" }}>
        {phone}
      </Col>
    </Row>
  );
}

export default EmployeeRow;
