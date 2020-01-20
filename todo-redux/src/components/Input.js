import React, { Component } from "react";
import shortId from "shortid";
import "materialize-css";

export class Input extends Component {
  state = {
    value: ""
  };

  handleSubmit = e => {
    const { value } = this.state;
    e.preventDefault();
    const task = {
      task: value,
      id: shortId(),
      time: new Date().toDateString()
    };

    this.props.save(task);

    this.setState({ value: "" });
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="row">
            <div className="input-field col s6">
              <input
                value={value}
                placeholder="Placeholder"
                id="first_name"
                type="text"
                className="validate"
                onChange={this.handleChange}
              />
              <label htmlFor="first_name">Task</label>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
