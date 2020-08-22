import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function InputBar (props) {

  return (
    <Row>
      <Col><div>Search:</div>
      <input onChange={props.onChange}></input>
      </Col>
    </Row>
  )
}

export default InputBar