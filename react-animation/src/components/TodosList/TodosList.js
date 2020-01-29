import React from "react";


export const TodosList = ({ task: { task, id }, deleteTask }) => {
  return (
    <div className="col s6 m6">
      <h2 className="header">{task}</h2>
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-action">
            <button className="btn" onClick={deleteTask.bind(null, id)}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
