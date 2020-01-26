import React from "react";

const List = ({ data = [] }) =>
  data.map(({ task }) => (
    <div>
      <h2>{task}</h2>
      <button>DELETE</button>
    </div>
  ));

export default List;
