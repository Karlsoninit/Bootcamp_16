import React from "react";
import Selected from "react-select";

const Select = ({ options = [], onHandleChange }) => (
  <div style={{ width: 300 }}>
    <Selected
      options={options}
      onChange={event => onHandleChange(event.value)}
    />
  </div>
);

export default Select;
