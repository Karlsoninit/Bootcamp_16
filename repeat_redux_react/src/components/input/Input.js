import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../../redux/taskActions";

class Input extends Component {
  state = {
    task: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.add({
      task: this.state.task,
      date: new Date().toLocaleDateString()
    });
    this.setState({ task: "" });
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ task: value });
  };
  render() {
    const { task } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={task} />
        <button type="submit">ADD</button>
      </form>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {
//   addTask
// };

// const mapDispatchToProps = x => ({
//   add: () =>
// });

const mapDispatchToProps = x => {
  return {
    add: value => {
      const up = value => ({
        ...value,
        task: value.task.toUpperCase()
      });
      x(addTask(up(value)));
    }
  };
};

export default connect(null, mapDispatchToProps)(Input);
