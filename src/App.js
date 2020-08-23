import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import EmployeeList from "./components/EmployeeList";
import employees from "./MOCK_DATA.json";
import SortBar from "./components/SortBar";
import InputBar from "./components/InputBar";

function App() {
  let [employeeState, setEmployeeState] = useState({
    employees: employees,
  });
  let [filteredEmployeeState, setFilteredEmployeeState] = useState({
    filteredEmployees: employees,
  });
  let [inputState, setInputState] = useState("");

  function handleChange(event) {
    const newInputState = event.target.value;
    setInputState(newInputState);
  }

  useEffect(() => {
    setFilteredEmployeeState({
      filteredEmployees: employeeState.employees.filter((employee) => {
        return (
          employee.lastName.toLowerCase().includes(inputState.toLowerCase()) ||
          employee.firstName.toLowerCase().includes(inputState.toLowerCase()) ||
          employee.email.toLowerCase().includes(inputState.toLowerCase()) ||
          employee.phone.toLowerCase().includes(inputState.toLowerCase())
        );
      }),
    });
  }, [inputState, employeeState]);

  // Sort functions use setEmployeeState to arrange the employees
  function ascendSortByLastName() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort(
        (a, b) => {
          return a.lastName < b.lastName ? -1 : 1;
        }
      ),
    });
  }

  function ascendSortByFirstName() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort(
        (a, b) => {
          return a.firstName < b.firstName ? -1 : 1;
        }
      ),
    });
  }

  function descendSortByLastName() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort(
        (a, b) => {
          return a.lastName < b.lastName ? 1 : -1;
        }
      ),
    });
  }

  function descendSortByFirstName() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort(
        (a, b) => {
          return a.firstName < b.firstName ? 1 : -1;
        }
      ),
    });
  }

  function descendSortByEmail() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort(
        (a, b) => {
          return a.email < b.email ? 1 : -1;
        }
      ),
    });
  }
  function ascendSortByEmail() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort(
        (a, b) => {
          return a.email > b.email ? 1 : -1;
        }
      ),
    });
  }

  function ascendSortByPhone() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort(
        (a, b) => {
          return a.phone > b.phone ? 1 : -1;
        }
      ),
    });
  }

  function descendSortByPhone() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort(
        (a, b) => {
          return a.phone < b.phone ? 1 : -1;
        }
      ),
    });
  }

  return (
    <div className="App">
      <Container fluid>
        <Header />
        <InputBar className="inputbar" onChange={handleChange} />
        <SortBar
          ascendByPhone={ascendSortByPhone}
          descendByPhone={descendSortByPhone}
          ascendByEmail={ascendSortByEmail}
          descendByEmail={descendSortByEmail}
          ascendByLastName={ascendSortByLastName}
          ascendByFirstName={ascendSortByFirstName}
          descendByLastName={descendSortByLastName}
          descendByFirstName={descendSortByFirstName}
        />

        <EmployeeList list={filteredEmployeeState} />
      </Container>
    </div>
  );
}

export default App;
