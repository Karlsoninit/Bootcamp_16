import React, { Component } from "react";
import DropDown from "./components/dropDown/DropDown";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import { Input } from "./components/Input";
import { Todos } from "./components/todos/Todos";

class App extends Component {
  state = {
    isOpen: false,
    tasks: []
  };

  componentDidMount() {
    // this.setState({ isOpen: true });
  }

  handleClick = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  save = task => {
    this.setState(prev => ({ tasks: [...prev.tasks, task] }));
  };

  deleteTask = id => {
    console.log("delete", id);
    this.setState(prev => ({
      tasks: prev.tasks.filter(elem => elem.id !== id)
    }));
  };

  render() {
    const { isOpen, tasks } = this.state;
    console.log(tasks);
    return (
      <>
        <Input save={this.save} />
        <Todos data={tasks} deleteTask={this.deleteTask} />
        {/* <button onClick={this.handleClick}>SHOW</button> */}
        <CSSTransition
          in={isOpen}
          timeout={2000}
          classNames="drop"
          mountOnEnter
          unmountOnExit
        >
          {/* <DropDown data={tasks} /> */}
        </CSSTransition>
      </>
    );
  }
}

export default App;
