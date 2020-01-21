import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import { Input } from "./components/Input";
import { Todos } from "./components/todos/Todos";

class App extends Component {
  state = {
    isOpen: false
  };

  async componentDidMount() {
    this.props.getFetchAllTask();
  }

  handleClick = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  save = task => {
    this.props.addTask(task);
    this.props.addFetch(task);
  };

  render() {
    const { isOpen } = this.state;
    const { tasks } = this.props;
    console.log("tasks delete :", tasks);
    return (
      <>
        <Input save={this.save} />
        <Todos data={tasks} />
        <CSSTransition
          in={isOpen}
          timeout={2000}
          classNames="drop"
          mountOnEnter
          unmountOnExit
        ></CSSTransition>
      </>
    );
  }
}

export default App;
