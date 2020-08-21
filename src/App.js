import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import EmployeeList from "./components/EmployeeList";
import employees from "./MOCK_DATA.json";

function App() {
  let [employeeState, setEmployeeState] = useState({
    employees: employees
  });
  let [filteredEmployeeState, setFilteredEmployeeState] = useState({
    filteredEmployees: employees
  })
  let [inputState, setInputState] = useState("");

  function handleChange(event) {
    event.preventDefault();
    const newInputState = event.target.value
    setInputState(newInputState);
    console.log("inputState", inputState);
    setFilteredEmployeeState({
      filteredEmployees: employeeState.employees.filter(
        (employee) => employee.lastName === inputState
      ),
    });
  }


  // Sort functions use setEmployeeState to arrange the employees
  function ascendSortByLastName() {
    setFilteredEmployeeState({
      filteredEmployees: employeeState.employees.sort((a, b) => {
        return a.lastName < b.lastName ? -1 : 1;
      }),
    });
  }

  function ascendSortByFirstName() {
    setFilteredEmployeeState({
      filteredEmployees: employeeState.employees.sort((a, b) => {
        return a.firstName < b.firstName ? -1 : 1;
      })
    });
  }

  function descendSortByLastName() {
    setFilteredEmployeeState({
      filteredEmployees: employeeState.employees.sort((a, b) => {
        return a.lastName < b.lastName ? 1 : -1;
      }),
    });
  }

  function descendSortByFirstName() {
    setFilteredEmployeeState({
      filteredEmployees: employeeState.employees.sort((a, b) => {
        return a.firstName < b.firstName ? 1 : -1;
      }),
    });
  }

  return (
    <div className="App">
      <Container fluid>
        <input value={inputState} onChange={handleChange}></input>
        <button onClick={ascendSortByLastName}>
          Sort By Last Name (Ascending)
        </button>
        <button
          onClick={ascendSortByFirstName}
        >
          Sort By First Name (Ascending)
        </button>
        <button
          onClick={descendSortByLastName}
        >
          Sort By Last Name (Descending)
        </button>
        <button
          onClick={descendSortByFirstName}
        >
          Sort By First Name (Descending)
        </button>
        <Header />
        <EmployeeList list={filteredEmployeeState} />
      </Container>
    </div>
  );
}

export default App;
