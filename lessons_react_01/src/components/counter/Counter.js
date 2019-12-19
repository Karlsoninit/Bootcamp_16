import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: 0,
    info: '',
    isOpen: false,
    arr: ['one'],
  };

  onHandleIncrement = () => {
    this.setState(prev => {
      console.log('prevState', prev);
      return { value: prev.value + this.props.step };
    });
  };
  decrement = () => {
    this.setState(prev => {
      console.log('prevState', prev);
      return { value: prev.value - this.props.step };
    });
  };

  handleValue = event => {
    const getInfo = event.target.value;
    this.setState(prevParam => ({
      info: getInfo,
    }));
    console.log(this.state.info);
  };

  onHandleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  onDraw = () => {
    const { info } = this.state;
    this.setState(prevParam => ({
      arr: [...prevParam.arr, info],
    }));
  };

  render() {
    const { step } = this.props;
    const { value, info, isOpen, arr } = this.state;
    console.log('in render', arr);

    return (
      <>
        <button onClick={this.onHandleOpen}>Open</button>
        {isOpen && (
          <>
            <button onClick={this.onHandleIncrement}>increment</button>
            <h2>{info}</h2>
            <p>{value}</p>
            <button onClick={this.onDraw}>draw</button>
            <input type="text" onChange={this.handleValue} />
            <button onClick={this.decrement}>decrement</button>
          </>
        )}
      </>
    );
  }
}

export default Counter;
