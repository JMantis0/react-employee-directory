import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import EmployeeRow from "./components/EmployeeRow";
import employees from "./MOCK_DATA.json";
function App() {
  let [employeeState, setEmployeeState] = useState({
    employees: employees,
  });

  return (
    <div className="App">
      <Container fluid>
        <button
          onClick={() => {
            setEmployeeState({
              employees: employeeState.employees.sort((a, b) => {
                return a.lastName < b.lastName ? -1 : 1;
              }),
            });
          }}
        >
          Sort By Last Name (Ascending)
        </button>
        <button
          onClick={() => {
            setEmployeeState({
              employees: employeeState.employees.sort((a, b) => {
                return a.firstName < b.firstName ? -1 : 1;
              }),
            });
          }}
        >
          Sort By First Name (Ascending)
        </button>
        <button
          onClick={() => {
            setEmployeeState({
              employees: employeeState.employees.sort((a, b) => {
                return a.lastName < b.lastName ? 1 : -1;
              }),
            });
          }}
        >
          Sort By Last Name (Descending)
        </button>
        <button
          onClick={() => {
            setEmployeeState({
              employees: employeeState.employees.sort((a, b) => {
                return a.firstName < b.firstName ? 1 : -1;
              }),
            });
          }}
        >
          Sort By First Name (Descending)
        </button>

        <Header />
        {employeeState.employees.map((employee) => (
          <EmployeeRow
            thumbnail={employee.thumbnail}
            firstName={employee.firstName}
            lastName={employee.lastName}
            phone={employee.phone}
            email={employee.email}
            key={Math.random()}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
