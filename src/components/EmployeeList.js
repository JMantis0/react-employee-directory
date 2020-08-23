import React from "react";
import EmployeeRow from "./EmployeeRow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EmployeeList({ list }) {
  console.log(list);
  return (
    <div>
      {list.filteredEmployees.map((employee) => (
        <EmployeeRow
          thumbnail={employee.thumbnail}
          firstName={employee.firstName}
          lastName={employee.lastName}
          phone={employee.phone}
          email={employee.email}
          key={Math.random()}
        />
      ))}
    </div>
  );
}

export default EmployeeList;
