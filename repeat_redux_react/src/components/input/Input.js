import React, { Component } from "react";

class Input extends Component {
  state = {
    task: ""
  };

  componentDidMount() {
    console.log("wait options inner input", this.props);
    console.log("new tasks");
    this.props.getTasks();
  }

  handleSubmit = async e => {
    e.preventDefault();
    const task = {
      task: this.state.task,
      date: new Date().toLocaleDateString()
    };
    this.props.addTask(task);

    // this.props.addTasksAll(task);

    await this.props.fetchPost(task);

    await this.props.getTasks();
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

export default Input;
