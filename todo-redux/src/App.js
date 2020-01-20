import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import { Input } from "./components/Input";
import { Todos } from "./components/todos/Todos";

class App extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    // this.setState({ isOpen: true });
    console.log(this.props);
  }

  handleClick = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  save = task => {
    this.props.addTask(task);
  };

  render() {
    const { isOpen } = this.state;
    const { tasks } = this.props;
    console.log(tasks);
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
