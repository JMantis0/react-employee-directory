import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UPSEmployeeRow ({ rank, firstName, lastName, seniority }) {

  return <Row>
    <Col xs={1} style={{textAlign: "center"}}>{rank}</Col>
    <Col xs={4} style={{textAlign: "left"}}>{firstName}</Col>
    <Col xs={4} style={{textAlign: "left"}}>{lastName}</Col>
    <Col xs={3} style={{textAlign: "left"}}>{seniority}</Col>
  </Row>

}

export default UPSEmployeeRow;