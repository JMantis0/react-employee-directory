import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function myFooter(props) {
  return (
    <footer>
      <Row>
        <Col>
          <p>
            Developed by <a href="https://github.com/JMantis0">Jesse Mazur</a>
          </p>
        </Col>
        <Col>
          <a href="https://www.vecteezy.com/free-vector/pattern">
            Pattern Vectors by Vecteezy
          </a>
        </Col>
      </Row>
    </footer>
  );
}

export default myFooter;
