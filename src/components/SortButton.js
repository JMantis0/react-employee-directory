import React from "react";
import { useBoolean } from "react-hanger";




function SortButton({ ascendSort, descendSort, buttonName }) {
  const ascending = useBoolean(true);
  console.log(typeof buttonName)
  function sortOnColumnAndToggleState() {
    if (ascending.value === true) {
      ascendSort();
      ascending.toggle();
    } else {
      descendSort();
      ascending.toggle();
    }
  }
  return <button onClick={sortOnColumnAndToggleState}>{(ascending.value) ? buttonName + "▼" : buttonName + "▲"}</button>;
}

export default SortButton;
