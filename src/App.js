import React from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import EmployeeRow from "./components/EmployeeRow";
import employees from "./employees";
function App() {
  return (
    <div className="App">
      <Container fluid>
        <Header />
        {employees.map((employee) => (
          <EmployeeRow
            firstName={employee.firstName}
            lastName={employee.lastName}
            phone={employee.phone}
            email={employee.email}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
