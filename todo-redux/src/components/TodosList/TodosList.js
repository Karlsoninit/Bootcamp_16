import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../../redux/actions";


const TodosList = ({ task: { task, id }, deleteTask }) => {
  return (
    <div className="col s6 m6">
      <h2 className="header">{task}</h2>
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-action">
            <button className="btn" onClick={() => deleteTask(id)}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MDTP = { deleteTask };

export default connect(null, MDTP)(TodosList);
