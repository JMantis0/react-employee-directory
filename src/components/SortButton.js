import React from "react";
import Button from "react-bootstrap/Button"
import { useBoolean } from "react-hanger";

function SortButton({ ascendSort, descendSort, buttonName }) {
  const ascending = useBoolean(true);
  function sortOnColumnAndToggleState() {
    if (ascending.value === true) {
      ascendSort();
      ascending.toggle();
    } else {
      descendSort();
      ascending.toggle();
    }
  }
  return <Button className="hvr-pulse-grow button" onClick={sortOnColumnAndToggleState}>{(ascending.value) ? buttonName + "▼" : buttonName + "▲"}</Button>;
}

export default SortButton;
