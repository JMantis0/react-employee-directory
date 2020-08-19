import React from 'react';
import './App.css';
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import EmployeeRow from "./components/EmployeeRow"
function App() {
  return (
    <div className="App">
      <Container fluid>
      <Header />
      <EmployeeRow />
      </Container>
    </div>
  );
}

export default App;
