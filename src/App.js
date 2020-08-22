import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import EmployeeList from "./components/EmployeeList";
import employees from "./MOCK_DATA.json";
import UPSEmployeeList from "./components/UPSEmployeeList";
import UPSEmployeeRow from "./components/UPSEmployeeRow"
import upsEmployees from "./csvjson (1).json"
import SortButton from "./components/SortButton"
import SortBar from "./components/SortBar"
import InputBar from "./components/InputBar"

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
      filteredEmployees: employeeState.employees.filter(
        (employee) => {
          return employee.lastName.toLowerCase().includes( inputState.toLowerCase()) || employee.firstName.toLowerCase().includes(inputState.toLowerCase());
        } 
      )
    });


  }, [inputState]);

  // Sort functions use setEmployeeState to arrange the employees
  function ascendSortByLastName() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort((a, b) => {
        return a.lastName < b.lastName ? -1 : 1;
      }),
    });
  }

  function ascendSortByFirstName() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort((a, b) => {
        return a.firstName < b.firstName ? -1 : 1;
      }),
    });
  }

  function descendSortByLastName() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort((a, b) => {
        return a.lastName < b.lastName ? 1 : -1;
      }),
    });
  }

  function descendSortByFirstName() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort((a, b) => {
        return a.firstName < b.firstName ? 1 : -1;
      }),
    });
  }

  function descendSortByRank() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort((a, b) => {
        return a.rank < b.rank ? 1 : -1;
      }),
    });
  
  }
  function ascendSortByRank() {
    setFilteredEmployeeState({
      filteredEmployees: filteredEmployeeState.filteredEmployees.sort((a, b) => {
        return a.rank > b.rank ? 1 : -1;
      }),
    });
  }

  return (
    <div className="App">
      <Container fluid>
        <InputBar onChange={handleChange} />
        <SortBar
        ascendByRank={ascendSortByRank}
        descendByRank={descendSortByRank}
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
