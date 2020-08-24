import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container"

function Header() {
  return (
    <Container fluid>
      <Jumbotron>
        <h1>Employee Directory</h1>
      </Jumbotron>
      </Container>
  );
}

export default Header;
