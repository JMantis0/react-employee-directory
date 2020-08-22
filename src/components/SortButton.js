import React from "react";

function SortButton({ sort, buttonName }) {
  return <button onClick={sort}>{buttonName}</button>;
}

export default SortButton;
