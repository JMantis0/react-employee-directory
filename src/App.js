import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import EmployeeList from "./components/EmployeeList";
import employees from "./MOCK_DATA.json";

function App() {
  let [employeeState, setEmployeeState] = useState({
    employees: employees,
    filteredEmployees: employees
  });
  let [inputState, setInputState] = useState("");


  function handleChange(event) {
    setInputState(event.target.value);
    console.log("inputState", inputState);
    setEmployeeState({
    ...employeeState, 
      filteredEmployees: employeeState.employees.filter((employee) => (employee.lastName === inputState))
    });
  }

  return (
    <div className="App">
      <Container fluid>
        <input
        value={inputState}
        onChange={handleChange}></input>
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
        <EmployeeList list={employeeState}/>
      </Container>
    </div>
  );
}

export default App;
