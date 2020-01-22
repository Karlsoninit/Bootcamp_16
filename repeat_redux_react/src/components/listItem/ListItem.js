import React from "react";
import { connect } from "react-redux";


const getTask = (state) => state.task.task

const ListItem = props => <h2>{props.task}</h2>;


const mapStateToProps = state => ({
  task: getTask(state)
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(ListItem);
