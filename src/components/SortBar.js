import React from "react";
import SortButton from "./SortButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SortBar(props) {
  return (
    <Row>
      <Col xs={1}>
       <SortButton buttonName="▲" sort={props.ascendByRank} />
       <SortButton buttonName="▼" sort={props.descendByRank} />
       
      </Col>
      {/* first name column */}
      <Col xs={4} style={{ textAlign: "left" }}>
        <SortButton buttonName="▲" sort={props.ascendByFirstName} />
        <SortButton buttonName="▼" sort={props.descendByFirstName} />
      </Col>
      <Col xs={4} style={{ textAlign: "left" }}>
        <SortButton buttonName="▲" sort={props.ascendByLastName} />
        <SortButton buttonName="▼" sort={props.descendByLastName} />
      </Col>
      <Col xs={3} style={{ textAlign: "left" }}>
      </Col>
      <Col style={{ textAlign: "left" }}>
      </Col>
    </Row>
  );
}

export default SortBar;
