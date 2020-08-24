import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function InputBar (props) {

  return (
    <Row className="inputrow">
      <Col><div className="search">Search:</div>
      <input onChange={props.onChange}></input>
      </Col>
    </Row>
  )
}

export default InputBar