import { connect } from "react-redux";
import { addTask, addTasksAll } from "../../redux/taskActions";
import Input from "./Input";
import borderHOC from "../../hoc/borderHOC";
import { compose } from "redux";
import { fetchPost, getTasks } from "../../redux/taskOperations";

const mapStateToProps = state => ({
  isOpen: state.success
});

const options = {
  opt: {
    some: "work"
  }
};

const mapDispatchToProps = {
  addTask,
  addTasksAll,
  fetchPost,
  getTasks
};

// const mapDispatchToProps = x => {
//   return {
//     add: value => {
//       const up = value => ({
//         ...value,
//         task: value.task.toUpperCase()
//       });
//       x(addTask(up(value)));
//     }
//   };
// };

// export default connect(null, mapDispatchToProps)(borderHOC(borderHOC(Input)));

export default compose(
  connect(mapStateToProps, mapDispatchToProps)(borderHOC(options)(Input))
);
