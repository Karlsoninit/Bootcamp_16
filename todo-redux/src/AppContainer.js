import App from "./App";
import { connect } from "react-redux";
// import * as actions from "./redux/actions";
import { addTask, deleteTask } from "./redux/actions";

const mapStateToProps = state => ({
  tasks: state.todos
});

const mapDispatchToProps = {
  addTask,
  deleteTask
};

// const mapDispatchToProps = dispatch => ({
//   add: task => dispatch(addTask(task))
// });

export default connect(mapStateToProps, mapDispatchToProps)(App);
