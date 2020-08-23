import React from "react";
import SortButton from "./SortButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SortBar(props) {
  return (
    <Row className="columnTitles">
      <Col xs={1}></Col>
      <Col xs={3} style={{ textAlign: "left" }}>
        <SortButton
          buttonName="First Name"
          descendSort={props.descendByFirstName}
          ascendSort={props.ascendByFirstName}
        />
      </Col>
      <Col xs={3} style={{ textAlign: "left" }}>
        <SortButton
          buttonName="Last Name"
          descendSort={props.descendByLastName}
          ascendSort={props.ascendByLastName}
        />
      </Col>
      <Col xs={3} style={{ textAlign: "left" }}>
        <SortButton
          buttonName="E-mail"
          descendSort={props.descendByEmail}
          ascendSort={props.ascendByEmail}
        />
      </Col>
      <Col style={{ textAlign: "left" }}>
        <SortButton
          buttonName="Phone #"
          descendSort={props.descendByPhone}
          ascendSort={props.ascendByPhone}
        />
      </Col>
    </Row>
  );
}

export default SortBar;
