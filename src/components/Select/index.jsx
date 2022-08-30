import React from "react";

const Select = ({ setSelect }) => {
  return (
    <select onChange={(e) => setSelect(e.target.value)}>
      <option value="score">Score</option>
      <option value="time">Time</option>
      <option value="moves">Moves</option>
    </select>
  );
};

export default Select;
