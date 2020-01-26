import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../../redux/taskOperations";
// import { deleteTask } from "../../redux/taskActions";

const getTask = state => state.allTasks;

const ListItem = ({ data = [], deleteItem }) =>
  data.map(({ task, id }) => (
    <div key={id}>
      <h2>{task}</h2>
      <button onClick={() => deleteItem(id)}>DELETE</button>
    </div>
  ));

const mapStateToProps = state => ({
  data: getTask(state)
});

const mapDispatchToProps = {
  deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
