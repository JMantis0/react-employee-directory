import React from "react";
import EmployeeRow from "./UPSEmployeeRow"

function UPSEmployeeList({ list }) {
  return (
    <div>
      {list.filteredEmployees.map((employee) => (
        <EmployeeRow
          rank={employee.rank}
          firstName={employee.firstName}
          lastName={employee.lastName}
          seniority={employee.seniority}
          key={Math.random()}
        />
      ))}
    </div>
  );
}

export default UPSEmployeeList;