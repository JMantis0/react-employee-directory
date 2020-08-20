import React from "react";
import EmployeeRow from "./EmployeeRow"

function EmployeeList({ list }) {
  return (
    <div>
      {list.employees.map((employee) => (
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